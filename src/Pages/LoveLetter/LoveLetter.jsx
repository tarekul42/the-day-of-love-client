import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from "axios";
  

const LoveLetter = () => {
    const generateLoveLetter = (e) =>{
        e.preventDefault()
        const formvalue= e.target;
        const name = formvalue.name.value;
        const tone = formvalue.tone.value;
        const length = formvalue.length.value;
        const prompt = { name, tone, length}
        axios.post('http://localhost:5000/generate', prompt)
        .then(data => console.log(data))
    }
  return (
    <>
      <div className="min-h-screen content-center">
        <h2 className="text-center text-[1.5rem]">
          Craft the Perfect Love Letter in Seconds
        </h2>
        <form onSubmit={generateLoveLetter} className="mx-auto text-center w-1/4 space-y-4">
          {/* Name Input */}
          <Input name="name" type="text" placeholder="The Letter for ....." />

          <section className="flex gap-4">
            {/* Select Tone */}
            <Select name="tone">
              <SelectTrigger>
                <SelectValue placeholder="Your letter tone ....." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="romantic">Romantic</SelectItem>
                <SelectItem value="poetic">Poetic</SelectItem>
                <SelectItem value="funny">Funny</SelectItem>
              </SelectContent>
            </Select>

            {/* Select Length */}
            <Select name="length">
              <SelectTrigger>
                <SelectValue placeholder="Your letter Length ....." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="long">Long</SelectItem>
              </SelectContent>
            </Select>
          </section>

          {/* Generate Button */}
          <Button type="submit">Craft your letter</Button>
        </form>
        <div>{/* {console.log(letter)} */}</div>
      </div>
    </>
  );
};

export default LoveLetter;
