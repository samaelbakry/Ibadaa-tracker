import { Checkbox, CheckboxGroup, Label } from "@heroui/react";
import { useEffect, useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
import { toast } from "react-toastify";

export default function IbadaChecklist() {
  const [selected, setSelected] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const allOptions = [
    "fajr",
    "dhuhr",
    "asr",
    "maghrib",
    "isha",
    "morning-adhkar",
    "evening-adhkar",
    "quran-recitation",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("ibadaChecklist");
    if (saved) {
      setSelected(JSON.parse(saved));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("ibadaChecklist", JSON.stringify(selected));
    }
    if (selected.length === allOptions.length) {
      toast.success("All tasks completed! Mashallah! Keep it up!🤩");
    }
  }, [selected, loaded]);

  const progressPercentage = Math.round((selected.length / allOptions.length) * 100);

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-amber-500/10 dark:border-slate-700/60">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
              <BsCardChecklist className="text-xl" />
            </span>
            <h3 className="text-lg md:text-xl font-extrabold text-amber-900 dark:text-amber-200">
              Ibada Checklist
            </h3>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-900 dark:bg-amber-400/10 dark:text-amber-300 font-mono">
            {selected.length}/{allOptions.length}
          </span>
        </div>

        <div className="w-full bg-amber-200/40 dark:bg-slate-700/50 rounded-full h-1.5 mt-3 overflow-hidden">
          <div
            className="bg-amber-500 dark:bg-amber-400 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4 my-2">
        <div className="p-2.5 rounded-xl bg-amber-500/5 dark:bg-slate-800/50 border border-amber-500/10 dark:border-slate-700/60">
          <Checkbox
            isIndeterminate={selected.length > 0 && selected.length < allOptions.length}
            isSelected={selected.length === allOptions.length}
            name="select-all"
            onChange={(isSelected: boolean) => {
              setSelected(isSelected ? allOptions : []);
            }}
          >
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label className="text-sm font-bold text-amber-950 dark:text-amber-100 cursor-pointer">
                Mark All Completed
              </Label>
            </Checkbox.Content>
          </Checkbox>
        </div>

        <CheckboxGroup value={selected} onChange={setSelected}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="fajr">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Fajr 🌙
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="dhuhr">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Dhuhr ☀️
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="asr">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Asr 🌤️
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="maghrib">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Maghrib ⛅
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="isha">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Isha 🌑
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="morning-adhkar">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Morning Adhkar 📿
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="evening-adhkar">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Evening Adhkar 📿
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <div className="p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-slate-800/40 transition-colors">
              <Checkbox value="quran-recitation">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-sm font-semibold text-amber-900/90 dark:text-slate-300 cursor-pointer">
                    Quran Recitation ✨
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>
          </div>
        </CheckboxGroup>
      </div>
    </div>
  );
}