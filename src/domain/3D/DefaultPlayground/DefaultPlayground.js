import React from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";
import classnames from "classnames/bind";

import styles from "./DefaultPlayground.module.scss";

const cx = classnames.bind(styles);

export const DefaultPlayground = () => {
  return (
    <div className={cx("canvasContainer")}>
      <Engine canvasId="canvas">
        <Scene>
          <arcRotateCamera
            name="camera1"
            alpha={0}
            beta={Math.PI / 3}
            radius={10}
            // position={new Vector3(0, 2, -10)}
            target={Vector3.Zero()}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />
          <sphere
            name="sphere1"
            diameter={2}
            segments={16}
            position={new Vector3(0, 1, 0)}
          />
          <ground name="ground1" width={6} height={6} subdivisions={2} />
        </Scene>
      </Engine>
    </div>
  );
};

export default DefaultPlayground;
