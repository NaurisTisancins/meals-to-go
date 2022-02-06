import React from "react";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";
// export const Icon = styled.Image`
//   width: 15px;
//   height: 15px;
// `;

// export const RestaurantCard = styled(Card)`
//   background-color: ${(props) => props.theme.colors.bg.primary};
// `;

// export const RestaurantCardCover = styled(Card.Cover)`
//   padding: ${(props) => props.theme.space[3]};
//   background-color: ${(props) => props.theme.colors.bg.primary};
// `;

// export const Address = styled.Text`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.caption};
// `;

// export const Info = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

// export const Rating = styled.View`
//   flex-direction: row;
//   padding-top: ${(props) => props.theme.space[2]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;

// export const Section = styled.View`
//   flex-direction: row;
//   align-items: center;
// `;

// export const SectionEnd = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
// `;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, idx) => (
              <SvgXml
                key={`star-${placeId}-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};