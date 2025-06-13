import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function Dashboard() {
  const portfolioData = [
    { name: 'Bitcoin', symbol: 'BTC', amount: 0.5, price: 105800 },
    { name: 'Ethereum', symbol: 'ETH', amount: 2, price: 3500 },
    { name: 'Solana', symbol: 'SOL', amount: 10, price: 150 },
  ];

  const COLORS = ['#f39c12', '#8e44ad', '#27ae60', '#2980b9', '#e74c3c'];

  const chartData = portfolioData.map((item, index) => ({
    population: item.amount * item.price,
    name:item.symbol,
    color: COLORS[index % COLORS.length],
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
    

  }));

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 ,color:"white"}}>
        Kripto Portföyüm
      </Text>
      <PieChart
        data={chartData}
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: '#27ae60',
          backgroundGradientTo: '#27ae60',
          color: () => `#27ae60`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}
