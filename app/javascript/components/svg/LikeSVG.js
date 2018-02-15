import React from 'react'

function LikeSVG(props) {
  if(props.liked) {
    return activeIcon()
  } else {
    return inactiveIcon()
  }
}

function activeIcon() {
  return(
    <svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1">
        <title>save - active</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="job-list-active-save-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-1221.000000, -220.000000)">
            <g id="job-1" transform="translate(190.000000, 182.000000)" fill="#F95225">
                <g id="bookmarks" transform="translate(1031.000000, 38.000000)">
                    <path d="M8,13.8139535 L0.533333333,18 C0.161066667,18 0,17.8953488 0,17.5813953 L0,1.25581395 C0,0.570976744 0.789066667,0 1.86666667,0 L14.1333333,0 C15.2106667,0 16,0.570976744 16,1.25581395 L16,17.5813953 C16,17.8953488 15.8389333,18 15.4666667,18 L8,13.8139535 Z" id="save---active"></path>
                </g>
            </g>
        </g>
    </svg>
  );
}

function inactiveIcon() {
  return(
    <svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1">
      <title>save - inactive</title>
      <desc>Created with Sketch.</desc>
      <defs>
          <polygon id="path-1" points="0 0 16 0 16 18 0 18"></polygon>
      </defs>
      <g id="job-list-active-save-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-1221.000000, -220.000000)">
        <g id="job-1" transform="translate(190.000000, 182.000000)">
          <g id="bookmarks" transform="translate(1031.000000, 38.000000)">
            <g id="save---inactive">
              <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
              </mask>
              <g id="Clip-2"></g>
              <path d="M1.45454545,16.5509314 L7.57575758,13.0231417 C7.82933333,12.8762075 8.17066667,12.8762075 8.42424242,13.0231417 L14.5454545,16.5509314 L14.5454545,1.76086227 C14.5454545,1.47442867 14.2278788,1.17390818 13.5757576,1.17390818 L2.42424242,1.17390818 C1.77212121,1.17390818 1.45454545,1.47442867 1.45454545,1.76086227 L1.45454545,16.5509314 Z M1.21212121,17.9999254 C0.956121212,17.9999254 0.618181818,17.9703821 0.340848485,17.7553612 C0.0635151515,17.540536 0,17.2472546 0,17.0216686 L0,1.76086227 C0,0.766757692 1.11733333,0 2.42424242,0 L13.5757576,0 C14.8826667,0 16,0.766757692 16,1.76086227 L16,17.0216686 C16,17.2472546 15.9364848,17.540536 15.6591515,17.7553612 C15.3815758,17.9703821 15.0438788,17.9999254 14.7878788,17.9999254 C14.6366061,18.0018819 14.4882424,17.9652951 14.3636364,17.8960345 L8,14.2275715 L1.63636364,17.8960345 C1.51175758,17.9652951 1.36363636,18.0018819 1.21212121,17.9999254 Z" id="Fill-1" fill="#000000" mask="url(#mask-2)"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LikeSVG
