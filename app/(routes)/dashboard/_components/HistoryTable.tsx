import React from "react";
import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table";
import { SessionDetail } from "../medical-agent/[sessionid]/page";
import moment from "moment";
import ViewReportDialog from "./ViewReportDialog";

type Props = {
historyList: SessionDetail[];
};

const HistoryTable = ({ historyList }: Props) => {
return (
// Scroll container with fixed vertical height
<div className="max-h-[60vh] overflow-y-auto rounded-md border border-slate-700">
<Table className="min-w-full">
<TableCaption className="text-gray-300">
Previous Consultation Reports
</TableCaption>

    {/* Sticky header so columns stay visible while scrolling */}
    <TableHeader className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <TableRow className="border-slate-600">
        <TableHead className="w-[200px] text-white">
          AI Medical Specialist
        </TableHead>
        <TableHead className="text-white">Description</TableHead>
        <TableHead className="text-white">Date</TableHead>
        <TableHead className="text-right text-white">Action</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {historyList.map((record: SessionDetail, index: number) => (
        <TableRow
          key={index}
          className="hover:bg-slate-700/50 border-slate-600"
        >
          <TableCell className="font-medium text-gray-200">
            {record.selectedDoctor.specialist}
          </TableCell>
          <TableCell className="text-gray-300">{record.notes}</TableCell>
          <TableCell className="text-gray-300">
            {moment(new Date(record.createdOn)).fromNow()}
          </TableCell>
          <TableCell className="text-right">
            <ViewReportDialog record={record} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
);
};

export default HistoryTable;
