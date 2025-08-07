"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DoctorAgent } from "../../_components/DoctorAgent";
import { Circle,  Loader,  PhoneCall, PhoneOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Vapi from "@vapi-ai/web";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";


export type MedicalReport = {
  agent: string;
  user: string;
  timestamp: string;
  chiefComplaint: string;
  summary: string[];
  symptoms: string;
  duration: string;
  severity: string;
  medicationsMentioned: string[];
  recommendations: string[];
}; 


export type SessionDetail = {
    id: number;
    notes: string;
    sessionId: string;
    report: MedicalReport;
    selectedDoctor: DoctorAgent;
    createdBy: string;
    createdOn: string;
  };



  
  type message={
    role:string,
    text:string,
  }
function MedicalVoiceAgent() {
  const { sessionid } = useParams();
  const router = useRouter();
  
  // State management
  const [sessionDetails, setSessionDetails] = useState<SessionDetail>();
  const [callStarted, setCallStarted] = useState<boolean>(false);
  const [vapiInstance, setVapiInstance] = useState<Vapi | null>(null);
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [liveTranscripts, setLiveTranscripts] = useState<string>("");
  const [messages, setMessages] = useState<message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Initialize Vapi instance
  useEffect(() => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY || "");
    setVapiInstance(vapi);
    
    // Set up event listeners
    vapi.on("call-start", () => {
      console.log("Call started");
      setCallStarted(true);
      setLoading(false);
    });
    
    vapi.on("call-end", () => {
      console.log("Call ended");
      setCallStarted(false);
      setLoading(false);
      GenerateReport();
    });
    
    vapi.on("error", (error: any) => {
      console.error("Vapi error:", error);
      setLoading(false);
      setCallStarted(false);
      toast.error("Failed to start the call. Please try again.");
    });
    
    vapi.on("message", (message: any) => {
      if (message.type === "transcript") {
        const { role, transcriptType, transcript } = message;
        console.log(`${role}: ${transcript}`);
        
        if (transcriptType === 'partial') {
          setLiveTranscripts(transcript);
          setCurrentRole(role);
        } else if (transcriptType === 'final') {
          setMessages(prev => [...prev, { role, text: transcript }]);
          setLiveTranscripts("");
          setCurrentRole(null);
        }
      }
    });
    
    vapi.on('speech-start', () => {
      console.log('Assistant started speaking');
      setCurrentRole('assistant');
    });
    
    // Clean up on unmount
    return () => {
      if (vapi) {
        vapi.stop();
      }
    };
  }, []);
  
  // Fetch session details
  useEffect(() => {
    GetsessionDetails();
  }, [sessionid]);
  

  useEffect(() => {
    GetsessionDetails();
  }, [sessionid]);

  const GetsessionDetails = async () => {
    try {
      const result = await axios.get(`/api/session-chat?sessionid=${sessionid}`);
      setSessionDetails(result.data);
    } catch (error) {
      console.error("Error fetching session details:", error);
      toast.error("Failed to load session details");
    }
  };

  const GenerateReport = async () => {
    if (!sessionDetails) return null;
    
    try {
      const result = await axios.post('/api/medical-report', {
        messages: messages,
        sessionDetail: sessionDetails,
        sessionId: sessionid,
      });
      
      console.log("Generated report:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error generating report:", error);
      toast.error("Failed to generate report");
      return null;
    }
  };

  const startCall = async () => {
    if (!vapiInstance) {
      toast.error("Voice service not initialized");
      return;
    }
    
    try {
      setLoading(true);
      const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
      
      if (!assistantId) {
        throw new Error("Vapi assistant ID is not configured");
      }
      
      await vapiInstance.start(assistantId);
      
    } catch (error) {
      console.error("Error starting call:", error);
      setLoading(false);
      setCallStarted(false);
      toast.error("Failed to start the call. Please try again.");
    }
  };

  const endCall = async () => {
    if (!vapiInstance) return;
    
    try {
      setLoading(true);
      await vapiInstance.stop();
      setCallStarted(false);
      
      const result = await GenerateReport();
      console.log("Call ended and report generated", result);
      
      toast.success("Your report is generated.");
      router.replace('/dashboard');
    } catch (error) {
      console.error("Error ending call:", error);
      toast.error("Failed to end the call properly");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="p-5 border rounded-3xl bg-secondary">
      <div className="flex justify-between items-center">
        <h2 className="p-1 px-2 border rounded-md flex gap-2 items-center">
          <Circle className={`w-4 h-4  rounded-full ${callStarted?'bg-green-500':'bg-red-500'}`} />
          {callStarted ? 'Connected...':' Not Connected'}
         
        </h2>
        <h2>00:00</h2>
      </div>
      {sessionDetails?.selectedDoctor?.image &&
        sessionDetails?.selectedDoctor?.specialist && (
          <div className="flex items-center flex-col mt-10">
            <Image
              src={sessionDetails.selectedDoctor.image}
              alt={sessionDetails.selectedDoctor.specialist}
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-cover rounded-full"
            />
            <h2 className="mt-2 text-lg">
              {sessionDetails?.selectedDoctor?.specialist}
            </h2>
            <p className="text-sm text-gray-400">AI Medical Voice Agent</p>


            <div className="mt-32 overflow-y-auto display-flex flex-col items-center px-10 md:px-28 lg:px-52">
              {
                messages.slice(-4)?.map((msg,index)=>(
                  <div key={index}>
                    <h2 className="text-gray-400 p-2">{msg.role}: {msg.text}</h2>
                  </div>
                ))
              }
              <h2 className="text-gray-400">Assistant Msg</h2>
              {liveTranscripts && liveTranscripts?.length > 0 && (
                <h2 className="text-lg">{currentRole}: {liveTranscripts}</h2>
              )}
            </div>

            {!callStarted ?
             <Button className="mt-10" onClick={startCall} disabled={loading}>
              {loading? <Loader className="animate-spin" />:<PhoneCall/>}
               Start Call
            </Button>:
            <Button className="mt-10" variant={"destructive"} onClick={endCall}  disabled={loading}>
              {loading? <Loader className="animate-spin" />:<PhoneOff/>}
              Disconnect
            </Button>}
          </div>
        )}
    </div>
  );
}

export default MedicalVoiceAgent;
