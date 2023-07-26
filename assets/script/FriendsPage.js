const request = document.querySelector("#Requests");
const Suggestion = document.querySelector("#suggestion");
const Friend = document.querySelector("#Friends");
let object = [
  { name: "Chharng Chhit", img: "../assets/images/user.jpg" },
  {
    name: "Tongmeng Hai",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Hiek Lymonyratanak",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ang Ousa",
    img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Srey Len",
    img: "https://images.pexels.com/photos/3756943/pexels-photo-3756943.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

let friendRequest = () => {
  let txt = "";
  for (let i = 0; i < 3; i++) {
    let obj = object[i];
    txt =
      txt +
      `
        <div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center">
            <div class="flex w-7/12 h-full">
              <div class="user-img flex items-center">
                <img src="${obj.img}" alt="" class="rounded-full w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
              </div>
              <div class="ml-4 flex flex-col justify-evenly">
                <div class="name text-[0.875rem] normal font-[800]">${obj.name}</div>
                <div class="des text-[0.625rem] text-[#645959] font-[500]">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
            <div class="w-5/7 flex justify-end">
                <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#0074B7CC] text-white text-[0.75rem] font-[700] mr-[.63rem]">
                  Confirm
                </button>
                <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#98B0A9B2] text-[#383636] text-[0.75rem] font-[700] mr-2">
                  Delete
                </button>
            </div>
        </div>
        `;
  }
  request.innerHTML = txt;
};
friendRequest();

let suggestion = () => {
  let txt = "";

  for (let i = 0; i < 3; i++) {
    let obj = object[i];
    txt =
      txt +
      `<div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center">
      <div class="flex w-7/12 h-full">
        <div class="user-img flex items-center">
          <img src="${obj.img}" alt="" class="rounded-full w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
        </div>
        <div class="ml-4 flex flex-col justify-evenly">
          <div class="name text-[0.875rem] normal font-[800]">${obj.name}</div>
          <div class="des text-[0.625rem] text-[#645959] font-[500]">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div class="w-5/7 flex justify-end">
          <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#0074B7CC] text-white text-[0.75rem] font-[700] mr-[.63rem]">
            Confirm
          </button>
          <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#98B0A9B2] text-[#383636] text-[0.75rem] font-[700] mr-2">
            Delete
          </button>
      </div>
  </div>
        `;
  }
  Suggestion.innerHTML = txt;
};
suggestion();

let allFriend = () => {
  let txt = "";

  for (let i = 0; i < object.length; i++) {
    let obj = object[i];
    txt =
      txt +
      `<div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center">
      <div class="flex w-7/12 h-full">
        <div class="user-img flex items-center">
          <img src="${obj.img}" alt="" class="rounded-full w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
        </div>
        <div class="ml-4 flex flex-col justify-evenly">
          <div class="name text-[0.875rem] normal font-[800]">${obj.name}</div>
          <div class="des text-[0.625rem] text-[#645959] font-[500]">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div class="w-5/7 flex justify-end">
          <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#0074B7CC] text-white text-[0.75rem] font-[700] mr-[.63rem]">
            Confirm
          </button>
          <button class="h-[1.875rem] w-[4rem] flex items-center justify-center rounded-[0.3125rem] bg-[#98B0A9B2] text-[#383636] text-[0.75rem] font-[700] mr-2">
            Delete
          </button>
      </div>
  </div>
        `;
  }
  Friend.innerHTML = txt;
};
allFriend();
