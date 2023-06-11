import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import CommonFrame from "../components/CommonFrame"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {

  const body = 
    <main style={pageStyles}>
      <h1 style={headingStyles}>ご指定のページは存在しません</h1>
      <p style={paragraphStyles}>
      おそらく、URLが正しく入力されていないか、またはページが移動または削除された可能性があります。ご不便をおかけして申し訳ありません。

もしご自身でURLを入力された場合は、入力したURLが正しいかご確認ください。もしURLをクリックしてこのページにリダイレクトされた場合は、サイトの管理者に問題を報告していただけると幸いです。
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">ホームに戻る</Link>.
      </p>
    </main>
  
  return (CommonFrame(body));
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
