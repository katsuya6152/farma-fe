import React from "react";

interface Cow {
  name: string;
  code: string;
  value: string;
}

interface CowProps {
  cow: Cow;
  isParent?: boolean;
  isGrandparent?: boolean;
}

const CowComponent: React.FC<CowProps> = ({ cow, isParent, isGrandparent }) => {
  const baseClasses =
    "border border-gray-300 p-2 rounded-md text-center w-full";
  const colorClasses = isParent
    ? "bg-blue-100"
    : isGrandparent
      ? "bg-gray-100"
      : "bg-white";

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      <div className="font-bold">{cow.name}</div>
      <div className="flex gap-1 text-center">
        <div className="text-sm text-gray-600">{cow.code}</div>
        <div className="text-xs text-gray-500">{cow.value}</div>
      </div>
    </div>
  );
};

interface PedigreeProps {
  father: Cow;
  mother: Cow;
  grandparents: {
    fatherSide: { father: Cow; mother: Cow };
    motherSide: { father: Cow; mother: Cow };
  };
}

export const PedigreeInfo: React.FC<PedigreeProps> = ({
  father,
  mother,
  grandparents,
}) => {
  return (
    <div className="flex whitespace-nowrap">
      <div className="flex flex-col space-y-4 w-1/3">
        <CowComponent cow={father} isParent />
        <CowComponent cow={mother} isParent />
      </div>
      <div className="flex flex-col space-y-4 w-2/3 ml-4">
        <div className="flex flex-col space-y-2">
          <CowComponent cow={grandparents.fatherSide.father} isGrandparent />
          <CowComponent cow={grandparents.fatherSide.mother} isGrandparent />
        </div>
        <div className="flex flex-col space-y-2">
          <CowComponent cow={grandparents.motherSide.father} isGrandparent />
          <CowComponent cow={grandparents.motherSide.mother} isGrandparent />
        </div>
      </div>
    </div>
  );
};
