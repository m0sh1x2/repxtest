import React, { Component } from "react";
import { Dimensions, Text } from "react-native";
import { LineChart, BarChart, ContributionGraph } from "react-native-chart-kit";
import {
  Container,
  Icon,
  Content,
  Card,
  CardItem,
  Body,
  Header,
  Title
} from "native-base";

import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";

const data = [
  { name: "Toronto", population: 2800000 },
  { name: "Dublin", population: 527612 },
  { name: "New York", population: 8538000 },
  { name: "Beijing", population: 21500000 },
  { name: "Moscow", population: 11920000 }
];

export default class Reports extends Component {
  static navigationOptions = {
    drawerLabel: "Reports",
    drawerIcon: ({ tintColor }) => <Icon name="Reports" />
  };

  render() {
    return (
      <Container>
        <AppHeader title="Reports" navigation={this.props.navigation} />
        <Content>
          <Card>
            <BarChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June"
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width - 50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                color: (opacity = 1) => `rgb(68, 68, 68, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </Card>
          <Card>
            <LineChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June"
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width - 50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                color: (opacity = 1) => `rgb(68, 68, 68, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </Card>
          <Card>
            <Body>
              <ContributionGraph
                values={[
                  { date: "2017-01-02", count: 1 },
                  { date: "2017-01-03", count: 2 },
                  { date: "2017-01-04", count: 3 },
                  { date: "2017-01-05", count: 4 },
                  { date: "2017-01-06", count: 5 },
                  { date: "2017-01-30", count: 2 },
                  { date: "2017-01-31", count: 3 },
                  { date: "2017-03-01", count: 2 },
                  { date: "2017-04-02", count: 4 },
                  { date: "2017-03-05", count: 2 },
                  { date: "2017-02-30", count: 4 }
                ]}
                endDate={new Date("2017-04-01")}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={{
                  backgroundColor: "white",
                  backgroundGradientFrom: "white",
                  backgroundGradientTo: "white",
                  color: (opacity = 1) => `rgb(68, 68, 68, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
              />
            </Body>
          </Card>
        </Content>
        <AppFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}
