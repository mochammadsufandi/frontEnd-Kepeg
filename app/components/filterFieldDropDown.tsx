import { useState } from "react";
import Image from "next/image";
import { converterFieldToNameButton } from "@/utils/converter";
import { DropDownSelectFilterField, FilterFields } from "@/interface/propsInterface";

export default function FilterFieldDropDown({
  filterFields,
  onSelectField,
}: DropDownSelectFilterField) {
  const [isOpen, setIsOpen] = useState(false);
  const filters = [
    "gender",
    "tempatLahir",
    "tanggalLahir",
    "originalRank",
    "pangkatSejak",
    "jabatanSejak",
    "PNSSejak",
    "pendidikanTerakhir",
    "promotionYAD",
    "jaksa",
    "jaksaSejak",
    "keterangan",
    "promotionChecking",
    "marker",
    "keteranganTambahan",
    "unitId",
  ] as Array<keyof FilterFields>;

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center px-4 py-2 bg-dropdownSelectField text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span> Select Field For Filtering</span>
        <Image
          src={"/images/dropdown.svg"}
          alt="dropdown"
          width={30}
          height={30}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        ></Image>
      </button>
      {isOpen && (
        <div className="absolute bg-background shadow-md rounded-md w-64 mt-2 p-4">
          <div className="mb-4">
            {filters.map((field) => (
              <button
                key={field}
                onClick={() => onSelectField(field as keyof FilterFields)}
                className={`px-3 py-1 m-1 rounded ${
                  Object.keys(filterFields).includes(field)
                    ? "bg-red-500 text-white"
                    : "bg-nonActiveFilterField opacity-40"
                }`}
              >
                {converterFieldToNameButton(field)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
