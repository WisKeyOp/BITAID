import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'
import { SessionDetail } from '../medical-agent/[sessionid]/page'
import moment from 'moment'

// Custom button component that renders as a span to avoid nested buttons
const CustomTrigger = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean
  }
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'text-primary underline-offset-4 hover:underline',
        'h-9 rounded-md px-3',
        'text-sm',
        className
      )}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </span>
  )
})
CustomTrigger.displayName = 'CustomTrigger'

type props = {
  record: SessionDetail
}

const ViewReportDialog = ({ record }: props) => {
  const report = record?.report as any; 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomTrigger className="text-violet-400 hover:text-violet-300 underline-offset-4 hover:underline focus-visible:ring-violet-500">View Report</CustomTrigger>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h2 className='text-center text-2xl'>Medical AI Voice Agent Report</h2>
          </DialogTitle>
          <DialogDescription asChild>
            <div className='mt-6 space-y-4'>

              {/* Session Info */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Session Info</h2>
                <p><span className='font-bold'>Doctor</span>: {record.selectedDoctor.specialist}</p>
                <p><span className='font-bold'>Consulted On</span>: {moment(new Date(record?.createdOn)).format("LLL")}</p>
              </div>

              {/* Complaint */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Chief Complaint</h2>
                <p>{report?.chiefComplaint || "N/A"}</p>
              </div>

              {/* Summary */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Summary</h2>
                <p>{report?.summary || "N/A"}</p>
              </div>

              {/* Symptoms */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Symptoms</h2>
                <p>{report?.symptoms || "N/A"}</p>
              </div>

              {/* Duration & Severity */}
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <h2 className='font-bold text-blue-500 text-lg'>Duration</h2>
                  <p>{report?.duration || "N/A"}</p>
                </div>
                <div>
                  <h2 className='font-bold text-blue-500 text-lg'>Severity</h2>
                  <p>{report?.severity || "N/A"}</p>
                </div>
              </div>

              {/* Medications */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Medications Mentioned</h2>
                <ul className="list-disc list-inside">
                  {report?.medicationsMentioned?.map((med: string, idx: number) => (
                    <li key={idx}>{med}</li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div>
                <h2 className='font-bold text-blue-500 text-lg'>Recommendations</h2>
                <ul className="list-disc list-inside">
                  {report?.recommendations?.map((rec: string, idx: number) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>

              {/* Timestamp */}
              <div>
                <p className='text-xs text-gray-500 text-right'>
                  Generated on: {moment(report?.timestamp).format("LLL")}
                </p>
              </div>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ViewReportDialog
