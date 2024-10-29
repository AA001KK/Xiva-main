export const Icons = {
  locationIcon: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        stroke={"#eee"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.167 11.905c-1.543.68-2.5 1.63-2.5 2.678 0 2.071 3.73 3.75 8.333 3.75 4.602 0 8.333-1.679 8.333-3.75 0-1.049-.957-1.997-2.5-2.678M15 6.667c0 3.386-3.75 5-5 7.5-1.25-2.5-5-4.114-5-7.5a5 5 0 0 1 10 0Zm-4.167 0a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Z"
      />
    </svg>
  ),
  homeIcon: ({ color = "#848484" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.819 2.303c-.293-.227-.44-.341-.601-.385a.833.833 0 0 0-.436 0c-.161.044-.308.158-.6.385L3.528 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.728.357.182.823.182 1.757.182h1.666c.234 0 .35 0 .44-.045a.417.417 0 0 0 .182-.182c.045-.09.045-.206.045-.44v-5.5c0-.466 0-.7.09-.878a.833.833 0 0 1 .365-.364C8.133 10 8.367 10 8.833 10h2.334c.466 0 .7 0 .878.09.157.08.284.208.364.365.091.178.091.412.091.878v5.5c0 .234 0 .35.045.44.04.078.104.142.182.182.09.045.206.045.44.045h1.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V8.804c0-.478 0-.718-.062-.938a1.665 1.665 0 0 0-.265-.542c-.136-.184-.325-.33-.702-.625l-5.652-4.396Z"
      />
    </svg>
  ),
  messsageIcon: ({ color = "#848484" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.833 7.083H10M5.833 10H12.5m-4.43 5h5.43c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C17.5 13.1 17.5 12.4 17.5 11V6.5c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v10.446c0 .444 0 .666.091.78.08.1.2.157.326.157.146 0 .32-.139.666-.416l1.988-1.59c.406-.325.61-.488.835-.603a2.5 2.5 0 0 1 .635-.223C7.29 15 7.55 15 8.07 15Z"
      />
    </svg>
  ),
  tempIcon: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      {...props}
    >
      <path
        stroke="#EC6416"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.999 8.25a3.667 3.667 0 0 0-1.834 6.875M11 2.75v1.833m-4.95 12.284L4.765 18.15m-1.1-6.233H1.832m4.217-4.95L4.765 5.683m13.567 7.64V3.668a1.833 1.833 0 1 0-3.667 0v9.657a3.667 3.667 0 1 0 3.667 0Z"
      />
    </svg>
  ),
  cardIcon: ({ color = "#848484" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill={"none"}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.333 15 1.666 1.667 3.334-3.334m0-5H1.666M18.333 10V6.833c0-.933 0-1.4-.182-1.756a1.667 1.667 0 0 0-.728-.729c-.357-.181-.824-.181-1.757-.181H4.333c-.934 0-1.4 0-1.757.181-.314.16-.569.415-.728.729-.182.356-.182.823-.182 1.756v6.334c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.357.181.823.181 1.757.181h5.666"
      />
    </svg>
  ),
  doorIcon: ({ color = "#848484" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100.667}
      height={100.667}
      viewBox="0 0 100 100"
    >
      <path d="M290 1.5c-8 1.6-20 6.2-25.8 9.9-2.4 1.5-57.4 42.5-122.1 91-83.5 62.6-119 89.9-122.3 93.7C10 207.7 4 220 1.4 234.1.1 240.8-.1 254.5.3 324.2c.3 77.7.5 83.2 2.5 97.5 4.1 28.7 11.9 60.6 16.9 69.3 5.5 9.3 16.7 17.5 27.4 19.9 6.4 1.5 402 1.5 409.1 0 16.2-3.4 29.7-17.4 32.8-34 .6-3 6-102.4 12.1-220.9 9.5-184.5 11-216.4 9.9-221.4-3.1-15.9-15.6-29-31.4-33.2-7.3-2-179.8-1.9-189.6.1zm190 17.9c7.7 4.1 13.4 11.6 14.5 19.3.3 2.1-3.7 86.3-9 187-5.2 100.8-9.5 183.5-9.5 183.8 0 .3-102.8.5-228.4.5H19.2l-.7-4.2c-.3-2.4-.9-40-1.1-83.6-.6-87.7-.7-86.8 5.7-100.2 6.6-14 3-11.1 129-105.6 64.7-48.5 119.3-89.3 121.5-90.6 2.1-1.3 5.9-3.2 8.4-4.2 11.1-4.4 12-4.5 105.5-4.3 84.7.2 89.2.3 92.5 2.1zm-5 412.3c0 2.7-.3 6.5-.6 8.6l-.7 3.7-225.1-.2-225.1-.3-1.2-7c-.6-3.9-1.2-7.6-1.2-8.3C21 427.3 67 427 248 427h227v4.7zm-2 34.6c0 11.5-5.3 21.2-14.4 26l-4.1 2.2h-405l-4.1-2.2c-7.1-3.8-11.7-10.1-14.7-20-1.5-4.8-2.7-9.4-2.7-10.1 0-.9 45.2-1.2 222.5-1.2H473v5.3z" />
      <path d="M294.5 35.4c-2.7.7-7 2.3-9.4 3.5-2.3 1.2-43.7 31.8-92 68-48.2 36.1-90 67-93 68.7-3 1.6-7.7 5.1-10.5 7.8-2.7 2.7-13 10.9-22.7 18.2-9.8 7.3-18.8 14.8-20.2 16.6-8.3 11.1-5.1 26.9 6.7 34.3l4.9 3h391.2l5.3-2.9c5.9-3.3 9.6-7.6 11.7-13.6 1.7-4.8 11.1-178.1 10-184-1.4-7.3-6.8-14.5-14-18.3-4-2.2-4.1-2.2-83.5-2.4-60.8-.1-80.7.1-84.5 1.1zM454.4 52c1.4.5 3.2 2 4.1 3.3 1.4 2.2 1.1 9.9-3 89.6-2.5 48-5 88.1-5.5 89.1-2.8 5.3 6.3 5-150.7 5H154v-25.8c0-14.6-.5-27.3-1-29.4-1.8-6.4-7-11.4-13.3-12.7-2.4-.5 5-6.4 73.9-58.1 42.2-31.6 77.4-57.9 78.3-58.4 5.8-3.4 8-3.5 84.3-3.6 45.8 0 76.7.4 78.2 1zM136.8 213.2l-.3 25.3h-12c-10.3 0-12.6-.3-16.1-2.2-18.9-10-19.2-35.8-.5-45.5 5-2.6 6.1-2.8 17.2-2.8H137l-.2 25.2zm-58.9 8.5c.6 3.2 2.5 8.2 4.1 11.2 1.7 3 3 5.6 3 5.8 0 .1-4.9.3-11 .3-9.8 0-11.2-.2-13.1-2.1-1.4-1.4-1.9-3-1.7-5.2.2-2.6 1.7-4.2 8.3-9.4 4.4-3.4 8.3-6.2 8.6-6.3.4 0 1.2 2.6 1.8 5.7zM358.6 274.6c-13 4.7-19.9 18-16.1 31 1.3 4.7 2.7 6.9 6.8 10.9 3.2 3.1 6.8 5.5 9.3 6.3 5.5 1.6 45.2 1.7 50.6 0 5.7-1.7 13.3-8.8 15.5-14.6 5.2-13.7-1.8-29-15.5-33.6-6.3-2.2-44.8-2.2-50.6 0zm45.9 16.4c3.4 1.3 5.9 6.9 4.6 10.4-2 5.2-3.9 5.6-25.1 5.6-21.2 0-23.1-.4-25.1-5.6-1.2-3.3 1.2-9.1 4.3-10.4 3.1-1.2 38-1.2 41.3 0z" />
    </svg>
  ),
};
const CardIcon2 = ({ fillk }) => {
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.333 15 1.666 1.667 3.334-3.334m0-5H1.666M18.333 10V6.833c0-.933 0-1.4-.182-1.756a1.667 1.667 0 0 0-.728-.729c-.357-.181-.824-.181-1.757-.181H4.333c-.934 0-1.4 0-1.757.181-.314.16-.569.415-.728.729-.182.356-.182.823-.182 1.756v6.334c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.357.181.823.181 1.757.181h5.666"
    />
  </svg>;
};
export { CardIcon2 };