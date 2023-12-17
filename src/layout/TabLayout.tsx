import { useState, useRef, useEffect } from "react";

function TabLayout(props: { tabs: Array<string> }) {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative m-2 flex h-12 bg-white rounded-3xl px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-[400ms]"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-black/90" />
      </span>
      {props.tabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(elem) => (tabsRef.current[index] = elem)}
            className={`${
              isActive ? `text-white` : `hover:text-neutral-500`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-black`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default TabLayout;
