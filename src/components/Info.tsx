import GroupLetter from "./GroupLetter";
import GroupLetterSelector from "./GroupLetterSelector";

const Info = () => {
  const infoHeaderText: string =
    "Simule los resultados que faltan y mirá como quedaría la tabla".toUpperCase();

  return (
    <div className="flex w-full flex-col items-start">
      <div className="w-full border-b border-gray-300 px-2 mx-auto pb-3 flex items-center justify-start gap-2">
        <h2 className="suecaslabextralight text-3xl text-gray-500">GRUPO</h2>
        <GroupLetterSelector />
      </div>
      <div className="flex justify-between items-end pt-3 w-full px-2">
        <GroupLetter />
        <div className="flex flex-col w-[70%] items-end self-end">
          <p className="suecanabold text-sm text-right text-gray-500">
            {infoHeaderText}
          </p>
          <p>arrow</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
