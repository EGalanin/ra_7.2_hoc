import Article from "./Article";
import { ContentWrapper } from "./ContentWrapper";
import Video from "./Video";

export default function List({ list }) {
  return list.map(item => {
    let content;

    switch (item.type) {
      case 'article':
        content = <Article {...item} />;
        break;
      default:
        content = <Video {...item} />;
    }

    return (
      <ContentWrapper key={item.id} views={item.views}>
        {content}
      </ContentWrapper>
    );
  });
}