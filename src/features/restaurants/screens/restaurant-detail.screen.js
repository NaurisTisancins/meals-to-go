import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          epanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          epanded={lunchExpanded}
          onPress={() => setLunchExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          epanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          epanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
          <List.Item title="Eggs" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
