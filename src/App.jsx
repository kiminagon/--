import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [text, setText] = useState("");

  const compliments = [
    "お前はいらない",
    "クラスの中心にはなれない人が好んでそう",
    "お前、同じことしか言わないよな",
    "成人式の日に同窓会行ってなさそう",
    "つまんないのはお前の方じゃない？",
    "アメリカにあるべきゴミ(2点)",
    "グループラインで既読だけつけてそう",
    "人の悪いところ見つけるのだけは得意だもんね",
    "人に褒められた事ってある？",
    "酔ってても面白くない人初めて見た",
    "喋る機能ついてたんだ",
    "お前結局何がしたいの？"
  ];

  const texts = [
    "呼んでない時に",
    "相手が勧めてくるサブカルチャーに対して",
    "同じことばかり言ってくる時に",
    "これ、結構傷ついた",
    "自分にも返ってくる諸刃の刃",
    "物の質が非常に悪かった時に",
    "これ言ったら喧嘩になった",
    "これ言ったら喧嘩になった",
    "ジャブ",
    "あいつのしゅんとした顔が忘れられない。結構後悔した",
    "地蔵みたいになってた人が喋った時に",
    "ホントに手が出そうになった。言う時は覚悟を持って"
  ];

  const handleComplimentClick = (clickedCompliment, clickedText) => {
    setCompliment(clickedCompliment);
    setText(clickedText);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>罵倒する時は相手との関係性、TPOを良く考えて友情が壊れない程度に丁寧に行いましょう</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {compliments.map((c, index) => (
          <Button
            key={index}
            onClick={() => handleComplimentClick(c, texts[index])}
            variant="contained"
            style={{ marginRight: '8px', marginBottom: '8px', backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif'}}
          >
            {c}
          </Button>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>使い方</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
