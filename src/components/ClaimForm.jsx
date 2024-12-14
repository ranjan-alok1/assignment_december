import React, { useState } from 'react'
import { Plus, Calculator, MapPin, FileText } from 'lucide-react'
import { TbMessageLanguage } from "react-icons/tb";
import { MdCloudUpload } from "react-icons/md";
import { LuScrollText } from "react-icons/lu";
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup"

export function ClaimForm() {
  const [contractValue, setContractValue] = useState('10,00,00')
  const [claimValue, setClaimValue] = useState('15,00,00')

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl text-gray-800">File your Claim.</h2>
          <span className="text-gray-400">(Approx 5 Minutes)</span>
        </div>
        <div className="h-0.5 bg-blue-500 w-96 mt-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-16 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg text-gray-700">Claim Value</h3>
          </div>
          <div className="space-y-6">
            <div>
              <Label className="text-gray-500 mb-2">Contract Value</Label>
              <div className="flex gap-2">
                <Input
                  value={contractValue}
                  onChange={(e) => setContractValue(e.target.value)}
                  className="bg-[#EDEEF5] border-gray-200"
                />
                {/* <Button 
                  variant="outline" 
                  className="border-gray-200 px-4 text-gray-600"
                >
                  USD ▾
                </Button> */}
                <select name="currency" variant="outline"
                  className="border-gray-200 px-4 text-gray-600">
                  <option value="USD">
                    USD
                  </option>
                  <option value="INR">
                    INR
                  </option>
                </select>
              </div>
            </div>
            <div>
              <Label className="text-gray-500 mb-2">Claim Value</Label>
              <div className="flex gap-2">
                <Input
                  value={claimValue}
                  onChange={(e) => setClaimValue(e.target.value)}
                  className="bg-[#EDEEF5] border-gray-200"
                />
                {/* <Button 
                  variant="outline"
                  className="border-gray-200 px-4 text-gray-600"
                >
                  USD ▾
                </Button> */}
                <select name="" id="" variant="outline"
                  className="border-gray-200 px-4 text-gray-600">
                  <option value="">
                    USD
                  </option>
                  <option value="">
                    INR
                  </option>
                </select>
              </div>
              <p className="text-sm text-orange-400 mt-1">150% of Contract Value</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg text-gray-700">Place</h3>
          </div>
          <div className="space-y-6">
            <Input 
              placeholder="Select the Place for proceedings"
              className="bg-[#EDEEF5] border-0 text-gray-400"
            />
            <div>
              <p className="text-sm text-gray-500 mb-3">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup defaultValue="no" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="place-yes" className="text-blue-500" />
                  <Label htmlFor="place-yes" className="text-gray-600">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="place-no" className="text-blue-500" />
                  <Label htmlFor="place-no" className="text-gray-600">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <TbMessageLanguage className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg text-gray-700">Language</h3>
          </div>
          <div className="space-y-6">
            <Input 
              placeholder="Select the language for proceedings"
              className="bg-[#EDEEF5] border-0 text-gray-400"
            />
            <div>
              <p className="text-sm text-gray-500 mb-3">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup defaultValue="no" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="lang-yes" className="text-blue-500" />
                  <Label htmlFor="lang-yes" className="text-gray-600">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="lang-no" className="text-blue-500" />
                  <Label htmlFor="lang-no" className="text-gray-600">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-16 mt-2">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <LuScrollText className="w-5 h-5 text-blue-500" />
            <h3 className="text-md text-gray-700">Statement</h3>
          </div>

          <div className="bg-[#EDEEF5] rounded-lg p-4">
            <div className="text-center">
              <p className="text-gray-500 mb-2 text-[15px]">Write your Statement Here</p>
              <span className="text-gray-400">or</span>
              <Button variant="ghost" className="w-full mt-2 text-blue-500">
                <MdCloudUpload className="w-4 h-4 mr-2" />
                <span className='text-[15px] text-gray-500'>Upload a Pdf</span>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-blue-500" />
            <h3 className="text-md text-gray-700">Agreement under Disputes</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Upload the Contract', 'Arbitration Agreement'].map((title) => (
              <div
                key={title}
                className="border-2 border-dashed bg-[#EDEEF5] border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 min-h-[120px]"
              >
                <MdCloudUpload className="w-6 h-6 text-blue-500" />
                <p className="text-[12px] text-gray-600">{title}</p>
                <p className="text-[10px] text-blue-400">Max 2MB, PDF</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-blue-500" />
            <h3 className="text-md text-gray-700">Additional Documentation</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed bg-[#EDEEF5] border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 min-h-[120px]">
              <MdCloudUpload className="w-6 h-6 text-blue-500" />
              <p className="text-[12px] text-gray-600">Upload the Contract</p>
              <p className="text-[10px] text-blue-400">Max 2MB, PDF</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-8 w-12 h-12 rounded-full border-blue-500"
            >
              <Plus className="w-8 h-8 text-blue-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

