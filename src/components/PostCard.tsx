import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type PostCardProps = {
  thumbnail?: IGatsbyImageData;
  title: string;
  description: string;
  slug: string;
  date: string;
};

const PostCard = ({
  thumbnail,
  title,
  description,
  slug,
  date,
}: PostCardProps) => {
  return (
    <Link to={slug} style={{ width: "100%" }}>
      <StyledPostCard>
        <StyledInfoWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledInfoWrapper>
        {thumbnail && (
          <StyledThumbnailImage
            image={thumbnail}
            alt={`${slug} Thumbnail Image`}
          />
        )}
      </StyledPostCard>
    </Link>
  );
};

export default PostCard;

const StyledPostCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    transform: translateY(-8px);
  }

  @media screen and (max-width: 1100px) {
    height: 144px;
  }

  @media screen and (max-width: 650px) {
    height: 88px;
  }
`;

const StyledThumbnailImage = styled(GatsbyImage)`
  width: 300px;
  height: 100%;
  border-radius: 36px 36px 36px 0;

  @media screen and (max-width: 1100px) {
    width: 240px;
  }

  @media screen and (max-width: 650px) {
    width: 180px;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledTitle = styled.p`
  color: #222;
  font-size: 24px;
  font-weight: medium;
  max-width: 80%;
`;

const StyledDate = styled.span`
  color: #666;
  font-size: 16px;
  font-weight: normal;
`;
