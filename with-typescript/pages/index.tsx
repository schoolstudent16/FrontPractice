import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [image, setImage] = useState(initialImageUrl); // 初期値を渡す
    const [loading, setLoading] = useState(false); // 初期状態はfalseにしておく
    // useEffect(() => {

    // useEffect(() => {
    //     fetchImage().then((image) => {
    //         setImage(image.url);
    //         setLoading(false);
    //     });
    // }, []);

    // ボタンをクリックしたときに画像を読み込む処理
  const handleClick = async () => {
    setLoading(true); // 読込中フラグを立てる
    const newImage = await fetchImage();
    setImage(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // 読込中フラグを倒す
  };
    return (
        <div>
            {loading || <img src={image} />}
            <button onClick={handleClick}>Load</button>
        </div>
    );
};
export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
      props: {
        initialImageUrl: image.url,
      },
    };
  };

type Image = {
    url: string;
}

const fetchImage = async (): Promise<Image> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const images = await res.json();
    console.log(images);
    return images[0];
}

fetchImage().then((image) => {
    console.log(image);
});
