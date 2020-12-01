import { GetStaticProps } from "next";

export default function Photos() {
  return <div>hi from pics</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const;
  return {
    props: {
      photos: [],
    },
  };
};
