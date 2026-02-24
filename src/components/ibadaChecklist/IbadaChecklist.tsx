import {Checkbox, CheckboxGroup, Label} from "@heroui/react";
import { useEffect, useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
import { toast } from "react-toastify";

 
export default function IbadaChecklist() {
    const [selected, setSelected] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false)
    const allOptions = ["fajr", "dhuhr", "asr" ,"maghrib", "isha", "morning-adhkar" , "evening-adhkar" ,"quran-recitation"];

    useEffect(() => {
      const saved = localStorage.getItem("ibadaChecklist")
      if(saved){
        setSelected(JSON.parse(saved))
      }
      setLoaded(true)
    }, [])
    
    useEffect(() => {
      if (loaded) {
      localStorage.setItem("ibadaChecklist", JSON.stringify(selected));
     }
      if(selected.length === allOptions.length){
        toast.success("All tasks completed! Mashallah! Keep it up!🤩")
      }
    }, [selected , loaded])
    

  return <>
    <h3 className="text-3xl font-bold text-amber-800 text-center my-2">
      <BsCardChecklist className="inline-block mr-2" />
      Ibada Checklist
    </h3>
    <div className="flex justify-between items-center">
     <div className="p-4 ">
      <Checkbox
        isIndeterminate={selected.length > 0 && selected.length < allOptions.length}
        isSelected={selected.length === allOptions.length}
        name="select-all"
        onChange={(isSelected: boolean) => {
          setSelected(isSelected ? allOptions : []);}} >
         <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label className="text-xl font-bold">Mark all</Label>
        </Checkbox.Content> 
      </Checkbox>
      <div className="ml-6 flex gap-2">
        <CheckboxGroup value={selected} onChange={setSelected}>
          <Checkbox value="fajr">
            <Checkbox.Control >
              <Checkbox.Indicator/>
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Fajr 🌙</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="dhuhr">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Dhuhr ☀️</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="asr">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Asr 🌤️</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="maghrib">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Maghrib ⛅</Label>
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>
     
    </div>
     <div className="p-4">
      <div className="ml-6 flex gap-2">
        <CheckboxGroup value={selected} onChange={setSelected}>
          <Checkbox value="isha">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Isha 🌑</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="morning-adhkar">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Morning Adhkar📿</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="evening-adhkar">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Evening Adhkar 📿</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="quran-recitation">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold">Quran Recitation✨</Label>
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>
     
    </div>

  </div>
  </>
}
