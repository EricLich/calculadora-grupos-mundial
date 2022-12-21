import GroupLetter from "./GroupLetter";
import GroupLetterSelector from "./GroupLetterSelector";

const Info = () => {
  const infoHeaderText: string = "Simulá los resultados que faltan y mirá como quedaría la tabla".toUpperCase();

  return (
    <div className="flex w-full flex-col items-start">
      <div className="w-full border-b border-gray-300 px-2 mx-auto pb-3 flex items-center justify-start gap-2">
        <h2 className="suecaslabextralight text-3xl text-gray-500">GRUPO</h2>
        <GroupLetterSelector />
      </div>
      <div className="flex justify-between items-end pt-3 w-full md:px-2">
        <GroupLetter />
        <div className="flex flex-col w-[70%] items-end self-end">
          <p className="suecanabold text-[10px] md:text-sm text-right text-gray-500">{infoHeaderText}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="rotate-180 w-5" fill="lightgrey" fillOpacity={0.7}>
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Info;
