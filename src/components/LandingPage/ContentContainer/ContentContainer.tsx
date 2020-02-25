import React from "react";
import { Button } from "react-bootstrap";
import { ContentContainerDiv, ContentImage, ContentText } from "./styled";

const ContentContainer = () => {
  return (
    <div>
      <ContentContainerDiv>
        <ContentImage />
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
          finibus sem feugiat id. Praesent vehicula, tellus at sagittis posuere,
          mauris ligula ornare massa, pharetra efficitur est mi a nisi. Aenean
          est elit, elementum a orci nec, tempus maximus erat. Mauris mattis
          sapien orci, at sagittis nibh auctor sed. Donec in erat a dolor
          commodo placerat id non quam. Sed ac tellus at orci pellentesque
          iaculis sit amet in sem.
        </ContentText>
      </ContentContainerDiv>
      <ContentContainerDiv>
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
          finibus sem feugiat id. Praesent vehicula, tellus at sagittis posuere,
          mauris ligula ornare massa, pharetra efficitur est mi a nisi. Aenean
          est elit, elementum a orci nec, tempus maximus erat. Mauris mattis
          sapien orci, at sagittis nibh auctor sed. Donec in erat a dolor
          commodo placerat id non quam. Sed ac tellus at orci pellentesque
          iaculis sit amet in sem.
        </ContentText>
        <ContentImage />
      </ContentContainerDiv>
    </div>
  );
};

export default ContentContainer;
