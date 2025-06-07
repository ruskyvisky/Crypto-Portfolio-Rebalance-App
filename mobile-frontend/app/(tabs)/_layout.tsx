// TabLayout.tsx

import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portföyüm',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="pie-chart" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="rebalance"
        options={{
          title: 'Portföy Dengeleme',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tune" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="strategy"
        options={{
          title: 'Stratejim',
          tabBarIcon: ({ color }) => (
            <Feather name="activity" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="simulation"
        options={{
          title: 'Simülasyon',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="play-circle" size={28} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
