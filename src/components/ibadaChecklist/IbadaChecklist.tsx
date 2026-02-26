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
    <h3 className="text-lg md:text-2xl font-bold text-yellow-700 text-center my-2 dark:text-blue-900">
      <BsCardChecklist className="inline-block mr-2" />
      Ibada Checklist
    </h3>
    <div className="flex justify-between items-center flex-wrap">
     <div className="p-2">
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
          <Label className="text-xl font-bold dark:text-gray-400">Mark all</Label>
        </Checkbox.Content> 
      </Checkbox>
      <div className="ml-6 flex gap-2 flex-wrap">
        <CheckboxGroup value={selected} onChange={setSelected}>
          <Checkbox value="fajr">
            <Checkbox.Control >
              <Checkbox.Indicator/>
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Fajr 🌙</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="dhuhr">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Dhuhr ☀️</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="asr">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Asr 🌤️</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="maghrib">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Maghrib ⛅</Label>
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
              <Label className="text-lg font-semibold dark:text-gray-400">Isha 🌑</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="morning-adhkar">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Morning Adhkar📿</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="evening-adhkar">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Evening Adhkar 📿</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="quran-recitation">
            <Checkbox.Control >
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-lg font-semibold dark:text-gray-400">Quran Recitation✨</Label>
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>
     
    </div>

  </div>
  </>
}
