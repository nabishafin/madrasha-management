"use client";

import React from "react";
import {
  Filter,
  Download,
  Search,
  Plus,
  ChevronDown,
  CirclePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import ClientOnly from "@/app/components/ClientOnly";

// Sample data
const studentData = [
  {
    id: "DUMS01",
    roll: "১",
    name: "মোঃ আরিফুল রহমান খান",
    residenceType: "আবাসিক",
    classSection: "নাজেরা",
    department: "সকাল",
    departmentColor: "bg-yellow-500",
    session: "ছাত্র",
    sessionYear: "২৪-২৫",
    grade: "O+",
  },
  {
    id: "DUMS01",
    roll: "২",
    name: "মোঃ রামজুজ্জামান সিদ্দিকী",
    residenceType: "অর্ধ-আবাসিক",
    classSection: "নাজেরা",
    department: "সকাল",
    departmentColor: "bg-yellow-500",
    session: "ছাত্র",
    sessionYear: "২৪-২৫",
    grade: "A+",
  },
  {
    id: "DUMS02",
    roll: "৩",
    name: "মোঃ তাওহিদুল রহমান রাজু",
    residenceType: "ইন্টারমিডিয়েট",
    classSection: "হিফজ",
    department: "বিকাল",
    departmentColor: "bg-gray-300",
    session: "ছাত্র",
    sessionYear: "২৪-২৫",
    grade: "O+",
  },
  {
    id: "DUMS02",
    roll: "৪",
    name: "মোঃ ইমরান মোসাইব হক",
    residenceType: "আবাসিক",
    classSection: "হিফজ",
    department: "সকাল",
    departmentColor: "bg-yellow-500",
    session: "ছাত্র",
    sessionYear: "২৪-২৫",
    grade: "A+",
  },
  {
    id: "DUMS03",
    roll: "৫",
    name: "মোঃ রফিকুল রহমান চৌধুরী",
    residenceType: "অর্ধ-আবাসিক",
    classSection: "সুন্নী",
    department: "বিকাল",
    departmentColor: "bg-gray-300",
    session: "ছাত্র",
    sessionYear: "২৪-২৫",
    grade: "O+",
  },
];

const StatItem = ({ label, value }) => (
  <div className="flex items-center text-sm">
    <span className="font-medium mr-1">{label} :</span>
    <span>{value}</span>
  </div>
);

const StudentTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm table-auto divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3">
            <input type="checkbox" />
          </th>
          {[
            "আইডি",
            "রোল",
            "নাম",
            "শ্রেণী/শাখা",
            "বিভাগ/শিক্ষা",
            "ডেজার/সেশন",
            "বাৎসরিক ক্লাস",
            "এ্যাকশান",
          ].map((th, idx) => (
            <th key={idx} className="px-4 py-3 text-left">
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {studentData.map((student, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            <td className="px-4 py-3">
              <input type="checkbox" />
            </td>
            <td className="px-4 py-3">{student.id}</td>
            <td className="px-4 py-3">{student.roll}</td>
            <td className="px-4 py-3">
              <div>
                <div>{student.name}</div>
                <div className="text-xs text-[#2b7752]">
                  {student.residenceType}
                </div>
              </div>
            </td>
            <td className="px-4 py-3">{student.classSection}</td>
            <td className="px-4 py-3 flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${student.departmentColor} mr-2`}
              />
              {student.department}
            </td>
            <td className="px-4 py-3">
              <div>
                <div>{student.session}</div>
                <div className="text-xs">{student.sessionYear}</div>
              </div>
            </td>
            <td className="px-4 py-3">{student.grade}</td>
            <td className="px-4 py-3">
              <a href="#" className="text-blue-500">
                আরও
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StudentDashboard = () => {
  const FilterDropdown = ({ label }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 min-w-[100px]"
        >
          <span>{label}</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div>
      {/* Header Actions */}
      <div className="flex items-center justify-between w-full">
        {/* Left Section */}
        <div className="flex items-center gap-3 flex-1">
          <p className="text-green-800 font-semibold text-xl whitespace-nowrap">
            সকল ছাত্র
          </p>
          <div className="h-[1px] bg-[#92A09A] w-full"></div>
        </div>

        {/* Divider */}
        <div className="h-6 w-1 bg-[#92A09A] mx-4"></div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-blue-600 font-medium whitespace-nowrap">
            ২ ড্রাফট
          </a>

          <Button
            variant="outline"
            className="border-[#2B7752] py-5 text-[#246545] bg-[#E7FEF2] rounded-sm w-[150px] hover:border-[#2B7752] hover:bg-[#E7FEF2] hover:text-[#246545] font-semibold"
          >
            ডাটা এক্সপোর্ট
          </Button>

          <Button className="border-[#2B7752] text-white bg-[#2B7752] rounded-sm w-[150px] hover:border-[#2B7752] hover:bg-[#2B7752] hover:text-white font-semibold">
            <CirclePlus size={25} />
            নতুন ছাত্র
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="my-6 bg-gray-50 px-4 py-8 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-4">
            <Filter size={18} className="mr-2 text-[#2b7752]" />
            <span className="text-sm font-medium">ফিল্টার</span>
          </div>
          <div className="relative w-80">
            <Input
              type="text"
              placeholder="নাম, রোল, আইডি দিয়ে সার্চ করুন..."
              className="pl-10 pr-7 py-5 w-full bg-white border-gray-300 rounded-md"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4 mt-4">
          <ClientOnly>
            {[
              "শ্রেণী",
              "শাখা",
              "শিক্ষা",
              "বিভাগ",
              "ডেজার",
              "আর্থিক অবস্থা",
              "বাৎসরিক ক্লাস",
            ].map((label, idx) => (
              <FilterDropdown key={idx} label={label} />
            ))}
          </ClientOnly>
          <Button className="bg-[#2b7752] text-white px-4 py-2 text-sm">
            ক্লিয়ার ফিল্টার
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-[#ebffee] rounded-md p-4 mb-6 flex flex-wrap gap-4">
        {[
          ["মোট ছাত্র", "৩০০০"],
          ["আবাসিক", "৮৫০০"],
          ["অনাবাসিক", "২০০"],
          ["অর্ধ-আবাসিক", "৬০০"],
          ["নাজেরা", "৭০০"],
          ["হিফজ", "২০০"],
          ["সুন্নী", "২০০"],
          ["কিতাব", "১০০০"],
          ["ইন্টারমিডিয়েট", "২"],
        ].map(([label, value], idx) => (
          <StatItem key={idx} label={label} value={value} />
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-md shadow-sm">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm font-medium">২০ জন সিলেক্টেড</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <span>সিলেক্ট একশান</span>
              <ChevronDown size={16} />
            </Button>
            <Button size="sm" className="bg-[#2b7752] text-white">
              এ্যাকশান
            </Button>
          </div>
        </div>
        <StudentTable />
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div>
      <StudentDashboard />
    </div>
  );
};

export default DashboardPage;
