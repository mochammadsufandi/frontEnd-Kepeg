import Image from "next/image";

const SearchBy = () => {
    return (
        <div className="w-[100%] h-fit bg-searchByBox flex flex-wrap justify-evenly pb-[2rem]">
            <h1 className="w-[100%] pt-[1rem] pb-[2rem] text-center text-background font-semibold text-[18px]">Please Input NIP/NRP or Name</h1>
            <div className="flex flex-col flex-wrap justify-evenly w-[35%] bg-searchByDivPart p-[2rem] rounded-lg">
                <div className="w-[100%] pb-[1rem] flex items-center">
                    <input type="text" placeholder="Search By NIP/NRP" className="h-[2rem] w-[75%] rounded-md text-center p-[10px] mr-[1rem]"></input>
                    <button className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center">
                        <Image
                            alt="searchButton"
                            src={"/images/search.png"}
                            height={30}
                            width={30}
                        ></Image>
                    </button>
                </div>
                <div className="">
                    <button className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3">
                        <span>See Result & Export</span>
                        <Image
                            src={"/images/download.png"}
                            alt="downloadButton"
                            width={30}
                            height={30}
                        >
                        </Image>
                    </button>
                </div>
            </div>
            <div className="flex flex-col flex-wrap justify-evenly w-[35%] bg-searchByDivPart p-[2rem] rounded-lg">
                <div className="w-[100%] pb-[1rem] flex items-center">
                    <input type="text" placeholder="Search By NIP/NRP" className="h-[2rem] w-[75%] rounded-md text-center p-[10px] mr-[1rem]"></input>
                    <button className="bg-searchButton w-[20%] h-[2rem] rounded-md flex items-center justify-center">
                        <Image
                            alt="searchButton"
                            src={"/images/search.png"}
                            height={30}
                            width={30}
                        ></Image>
                    </button>
                </div>
                <div className="">
                    <button className="w-[100%] h-[2rem] rounded-md bg-resultButton flex items-center justify-center gap-3">
                        <span>See Result & Export</span>
                        <Image
                            src={"/images/download.png"}
                            alt="downloadButton"
                            width={30}
                            height={30}
                        >
                        </Image>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBy;