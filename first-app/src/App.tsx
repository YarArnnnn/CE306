import React from "react";
import Greeting from "./Components/Greeting";
import WelcomeBanner from "./Components/WelcomeBanner"; 

function App() {
  return (
    <div>
      <Greeting name="ผู้ใช้งาน TypeScript" messageCount={5} />
      <Greeting name="นักพัฒนา Vite" />

      <WelcomeBanner title="ยินดีต้อนรับสู่โลกของ TypeScript!">
        <p>เนื้อหาส่วนนี้ส่งผ่าน children prop</p>
      </WelcomeBanner>
    </div>
  );
}

export default App;
