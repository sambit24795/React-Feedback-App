import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import NavbarItems from "./NavbarItems/NavbarItems";

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo right">
          <svg
            x="0px"
            y="0px"
            className="element-position"
            viewBox="0 0 512.002 512.002"
            width="48px"
            height="48px"
            style={{ enableBackground: "new 0 0 512.002 512.002" }}
          >
            <path
              style={{ fill: "#FF9269" }}
              d="M256.804,8.174v149.243c41.245,0,74.621-33.376,74.621-74.621S298.051,8.174,256.804,8.174z"
            />
            <path
              style={{ fill: "#FFB082" }}
              d="M256.804,8.174c-41.245,0-74.621,33.376-74.621,74.621s33.376,74.621,74.621,74.621
	c28.238,0,51.089-33.376,51.089-74.621S285.043,8.174,256.804,8.174z"
            />
            <path
              style={{ fill: "#C20035" }}
              d="M256.001,185.742v131.311h131.311C387.312,244.533,328.522,185.742,256.001,185.742z"
            />
            <path
              style={{ fill: "#FF3D00" }}
              d="M256.001,185.742c-72.521,0-131.311,58.79-131.311,131.311h229.941
	C354.632,244.531,310.474,185.742,256.001,185.742z"
            />
            <polygon
              style={{ fill: "#F3A933" }}
              points="327.717,419.521 293.021,454.849 300.32,503.827 255.994,481.756 240.743,429.209 
	255.994,367.417 278.881,411.329 "
            />
            <polygon
              style={{ fill: "#FFBE35" }}
              points="255.994,367.417 255.994,481.756 211.679,503.827 218.966,454.849 184.281,419.521 
	233.117,411.329 "
            />
            <polygon
              style={{ fill: "#F3A933" }}
              points="503.831,419.521 469.135,454.849 476.434,503.827 432.108,481.756 416.857,429.209 
	432.108,367.417 454.995,411.329 "
            />
            <polygon
              style={{ fill: "#FFBE35" }}
              points="432.108,367.417 432.108,481.756 387.792,503.827 395.08,454.849 360.395,419.521 
	409.231,411.329 "
            />
            <polygon
              style={{ fill: "#F3A933" }}
              points="151.608,419.521 116.912,454.849 124.21,503.827 79.884,481.756 64.633,429.209 
	79.884,367.417 102.772,411.329 "
            />
            <polygon
              style={{ fill: "#FFBE35" }}
              points="79.884,367.417 79.884,481.756 35.569,503.827 42.857,454.849 8.172,419.521 57.008,411.329 
	"
            />
            <path
              d="M256.001,161.236c44.452,0,80.617-36.165,80.617-80.618C336.618,36.165,300.454,0,256.001,0s-80.617,36.165-80.617,80.617
	C175.384,125.071,211.549,161.236,256.001,161.236z M256.001,16.341c35.442,0,64.277,28.834,64.277,64.277
	s-28.834,64.278-64.277,64.278s-64.277-28.835-64.277-64.278S220.559,16.341,256.001,16.341z"
            />
            <path
              d="M256.001,193.916c65.156,0,118.655,50.862,122.872,114.97H190.051c-4.512,0-8.17,3.657-8.17,8.17
	c0,4.512,3.658,8.17,8.17,8.17h197.262c4.512,0,8.17-3.658,8.17-8.17c0-76.91-62.572-139.481-139.482-139.481
	S116.52,240.148,116.52,317.057c0,4.512,3.658,8.17,8.17,8.17h32.681c4.512,0,8.17-3.658,8.17-8.17c0-4.513-3.658-8.17-8.17-8.17
	h-24.243C137.346,244.779,190.846,193.916,256.001,193.916z"
            />
            <path
              d="M152.956,411.465l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.394-7.245-4.394c-3.045,0-5.838,1.694-7.245,4.394
	l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248l31.839,32.43l-6.696,44.95
	c-0.449,3.013,0.815,6.024,3.279,7.814c2.462,1.79,5.717,2.061,8.445,0.704l40.681-20.259l40.681,20.259
	c1.153,0.573,2.4,0.856,3.641,0.856c1.696,0,3.381-0.527,4.803-1.561c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43
	c2.133-2.172,2.881-5.352,1.94-8.248C158.434,414.101,155.96,411.97,152.956,411.465z M111.085,449.132
	c-1.794,1.828-2.629,4.392-2.251,6.927l4.986,33.468l-30.29-15.084c-2.293-1.143-4.99-1.143-7.285,0l-30.291,15.084l4.986-33.468
	c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.008l15.639,30.008
	c1.184,2.272,3.366,3.857,5.893,4.282l33.372,5.602L111.085,449.132z"
            />
            <path
              d="M329.07,411.465l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.394-7.245-4.394c-3.045,0-5.838,1.694-7.245,4.394
	l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248l31.839,32.43l-6.695,44.95
	c-0.449,3.013,0.815,6.024,3.279,7.814c2.462,1.79,5.718,2.061,8.444,0.704l40.681-20.259l40.681,20.259
	c1.153,0.573,2.4,0.856,3.641,0.856c1.696,0,3.381-0.527,4.803-1.561c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43
	c2.133-2.172,2.881-5.352,1.94-8.248C334.548,414.101,332.074,411.97,329.07,411.465z M287.199,449.132
	c-1.795,1.828-2.629,4.392-2.251,6.927l4.985,33.468l-30.29-15.084c-1.147-0.571-2.394-0.856-3.642-0.856
	c-1.247,0-2.495,0.285-3.642,0.856l-30.29,15.084l4.985-33.468c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602
	c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.006l15.639,30.008c1.184,2.272,3.366,3.857,5.893,4.282l33.371,5.602
	L287.199,449.132z"
            />
            <path
              d="M511.602,416.998c-0.941-2.897-3.414-5.028-6.419-5.533l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.395-7.245-4.395
	s-5.838,1.694-7.245,4.395l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248
	l31.839,32.43l-6.696,44.95c-0.449,3.013,0.815,6.024,3.279,7.814c1.422,1.034,3.107,1.561,4.803,1.561
	c1.242,0,2.489-0.283,3.641-0.856l40.681-20.259l40.681,20.259c2.727,1.356,5.981,1.084,8.444-0.704
	c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43C511.794,423.073,512.543,419.894,511.602,416.998z M463.312,449.132
	c-1.795,1.828-2.629,4.392-2.251,6.927l4.986,33.468l-30.291-15.084c-1.147-0.571-2.394-0.856-3.642-0.856
	c-1.248,0-2.495,0.285-3.642,0.856l-30.29,15.084l4.986-33.468c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602
	c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.008l15.639,30.008c1.184,2.272,3.366,3.857,5.893,4.282l33.371,5.602
	L463.312,449.132z"
            />
            <path
              d="M256.001,117.661c10.71,0,20.898-4.654,27.953-12.768c2.96-3.405,2.6-8.566-0.805-11.527
	c-3.406-2.961-8.567-2.6-11.527,0.805c-3.949,4.544-9.644,7.149-15.621,7.149s-11.671-2.606-15.621-7.149
	c-2.961-3.405-8.121-3.765-11.527-0.805c-3.405,2.961-3.765,8.121-0.805,11.527C235.103,113.006,245.292,117.661,256.001,117.661z"
            />
          </svg>
        </Link>
        <NavbarItems
          renderContent={props.content}
          link={props.linkPath}
          linkClicked={props.clicked}
          userCredits={props.credits}
        />
      </div>
    </nav>
  );
};

export default Navbar;
