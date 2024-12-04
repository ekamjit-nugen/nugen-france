import { CircleIcon, MiniCircle, String, String2 } from "../../components/icons";

const SvgContainer = () => {
  return (
    <>
      <div className="absolute left-0 bottom-0 z-0">
        <CircleIcon />
      </div>
      <div className="absolute right-[20%] top-20 z-0">
        <MiniCircle />
      </div>
      <div className="absolute left-0 top-0 z-0">
        <String className="w-[12.5rem] sm:w-auto" />
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <String2 className="w-[12.5rem] sm:w-auto" />
      </div>
    </>
  );
};

export default SvgContainer;
