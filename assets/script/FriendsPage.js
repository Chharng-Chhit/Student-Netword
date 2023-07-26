const request = document.querySelector("#Requests");
const Suggestion = document.querySelector("#suggestion");
const Friend = document.querySelector("#Friends");

let friendRequest = () => {
  let txt = "";

  let object = {};

  for (let i = 0; i < 3; i++) {
    txt =
      txt +
      `
        <div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center">
            <div class="flex w-7/12 h-full">
              <div class="user-img flex items-center">
                <img src="../assets/images/user.jpg" alt="" class="rounded-full min-w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
              </div>
              <div class="ml-4 flex flex-col justify-evenly">
                <div class="name text-[0.875rem] normal font-[800]">Chharng Chhit</div>
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

  let object = {};

  for (let i = 0; i < 3; i++) {
    txt =
      txt +
      `<div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center">
      <div class="flex w-7/12 h-full">
        <div class="user-img flex items-center">
          <img src="../assets/images/user.jpg" alt="" class="rounded-full min-w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
        </div>
        <div class="ml-4 flex flex-col justify-evenly">
          <div class="name text-[0.875rem] normal font-[800]">Chharng Chhit</div>
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

let allFriend=()=>{
    let txt = "";

  let object = {};

  for (let i = 0; i < 3; i++) {
    txt =
      txt +
      `<div class="section1 user1 w-[23.125rem] h-[3.75rem] border-b-[1px] border-[#8E8E8E] flex items-center" >
      <div class="flex w-7/12 h-full">
        <div class="user-img flex items-center">
          <img src="../assets/images/user.jpg" alt="" class="rounded-full min-w-[3.125rem] h-[3.125rem] object-cover border-2 border-[black]">
        </div>
        <div class="ml-4 flex flex-col justify-evenly">
          <div class="name text-[0.875rem] normal font-[800]">Chharng Chhit</div>
          <div class="des text-[0.625rem] text-[#645959] font-[500]">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div class="w-5/7 flex justify-end">
          <button class="h-[1.875rem] w-[3.1875rem] flex items-center justify-center rounded-[0.3125rem] bg-[#0074B7CC] text-white text-[0.75rem] font-[700] mr-[.63rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.51663 0C3.28185 0 0 3.09496 0 7.2753C0 9.4618 0.898488 11.3513 2.36099 12.6566C2.61351 12.8837 2.56149 13.0152 2.60444 14.4175C2.60782 14.5158 2.63518 14.6117 2.68414 14.6969C2.7331 14.7821 2.80216 14.8541 2.88531 14.9065C2.96846 14.9589 3.06317 14.9901 3.16118 14.9975C3.25918 15.0049 3.35751 14.9882 3.44758 14.9489C5.04768 14.2443 5.06825 14.1886 5.33952 14.2624C9.9753 15.5383 15 12.5716 15 7.2753C15 3.09496 11.7517 0 7.51663 0ZM12.0299 5.59869L9.82228 9.09375C9.73891 9.22518 9.6293 9.33797 9.50031 9.42505C9.37132 9.51213 9.22573 9.57164 9.07267 9.59983C8.91961 9.62802 8.76237 9.6243 8.61082 9.58889C8.45926 9.55348 8.31666 9.48715 8.19194 9.39405L6.43548 8.07944C6.35696 8.02055 6.26146 7.98871 6.16331 7.98871C6.06515 7.98871 5.96965 8.02055 5.89113 8.07944L3.52107 9.87702C3.20474 10.1168 2.79042 9.7379 3.00363 9.40313L5.21129 5.90807C5.29463 5.77661 5.40423 5.66378 5.53322 5.57667C5.6622 5.48956 5.8078 5.43004 5.96088 5.40184C6.11395 5.37365 6.2712 5.37739 6.42276 5.41282C6.57432 5.44826 6.71693 5.51462 6.84163 5.60776L8.59748 6.92208C8.676 6.98097 8.77151 7.0128 8.86966 7.0128C8.96781 7.0128 9.06331 6.98097 9.14183 6.92208L11.5131 5.12631C11.8288 4.88498 12.2431 5.26361 12.0299 5.59869Z" fill="white"/>
            </svg>
          </button>
          <button class="h-[1.875rem] w-[4.5625rem] flex items-center justify-center rounded-[0.3125rem] bg-[#98B0A9B2] text-[#ff3838] font-sans text-[0.75rem] font-[700] mr-2">
            Unfriend
          </button>
      </div>
    </div>
        `;
  }
  Friend.innerHTML = txt;
}
allFriend();
