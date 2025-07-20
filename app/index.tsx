import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={48} color="#3b82f6" />
          </View>
          <Text style={styles.title}>Phishing Awareness Simulator</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Educational Purpose Only</Text>
          </View>
          <Text style={styles.subtitle}>
            Learn to identify and protect yourself from phishing attacks through this safe, educational simulation.
          </Text>
        </View>

        {/* Warning Card */}
        <View style={styles.warningCard}>
          <View style={styles.warningHeader}>
            <Ionicons name="warning" size={64} color="#f59e0b" />
            <Text style={styles.warningTitle}>🚨 Recognize Threats First</Text>
          </View>
          <Text style={styles.warningText}>
            <Text style={styles.bold}>Your first line of defense!</Text> Learn to spot suspicious messages, emails, and websites before they fool you. Knowledge is your best protection against phishing attacks.
          </Text>
        </View>

        {/* Feature Cards */}
        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <Ionicons name="brain" size={40} color="#10b981" />
            <Text style={styles.featureTitle}>🛡️ Experience Safely</Text>
            <Text style={styles.featureText}>
              Practice with realistic simulations in a completely safe environment. No risk, just learning through hands-on experience.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="shield" size={40} color="#3b82f6" />
            <Text style={styles.featureTitle}>🔒 Stay Protected</Text>
            <Text style={styles.featureText}>
              Master proven techniques and best practices to shield yourself from real-world phishing attempts and cyber threats.
            </Text>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimerCard}>
          <Text style={styles.disclaimerTitle}>
            <Ionicons name="warning" size={20} color="#f59e0b" /> Important Safety Notice
          </Text>
          <View style={styles.disclaimerList}>
            <Text style={styles.disclaimerItem}>✓ Completely safe educational simulation</Text>
            <Text style={styles.disclaimerItem}>✓ No real data transmitted or stored</Text>
            <Text style={styles.disclaimerItem}>✓ All banking interfaces are fake demos</Text>
            <Text style={styles.disclaimerItem}>✓ Educational cybersecurity purpose only</Text>
          </View>
        </View>

        {/* Training Apps */}
        <View style={styles.appsSection}>
          <Text style={styles.appsTitle}>🎯 Choose Your Training App</Text>
          <Text style={styles.appsSubtitle}>
            Select an interactive cybersecurity training module to start your learning journey
          </Text>

          <View style={styles.appGrid}>
            <TouchableOpacity 
              style={[styles.appButton, styles.smsApp]}
              onPress={() => router.push('/sms')}
            >
              <Text style={styles.appEmoji}>📱</Text>
              <Text style={styles.appTitle}>SMS Security</Text>
              <Text style={styles.appSubtitle}>Interactive Mobile Demo</Text>
              <View style={styles.appBadge}>
                <Text style={styles.appBadgeText}>Beginner Friendly</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.appButton, styles.emailApp]}
              onPress={() => router.push('/email')}
            >
              <Text style={styles.appEmoji}>📧</Text>
              <Text style={styles.appTitle}>Email Shield</Text>
              <Text style={styles.appSubtitle}>Advanced Email Training</Text>
              <View style={styles.appBadge}>
                <Text style={styles.appBadgeText}>Intermediate</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.appButton, styles.quizApp]}
              onPress={() => router.push('/quiz')}
            >
              <Text style={styles.appEmoji}>🧠</Text>
              <Text style={styles.appTitle}>Brain Trainer</Text>
              <Text style={styles.appSubtitle}>Knowledge Assessment</Text>
              <View style={styles.appBadge}>
                <Text style={styles.appBadgeText}>Test Your Skills</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.tapPrompt}>
            <Text style={styles.tapPromptText}>👆 Tap any app to begin your training!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#64748b',
    lineHeight: 26,
    paddingHorizontal: 16,
  },
  warningCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  warningHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#92400e',
    textAlign: 'center',
    marginTop: 16,
  },
  warningText: {
    fontSize: 16,
    color: '#92400e',
    textAlign: 'center',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  featureGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  featureCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  disclaimerCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 16,
  },
  disclaimerList: {
    gap: 8,
  },
  disclaimerItem: {
    fontSize: 14,
    color: '#92400e',
  },
  appsSection: {
    marginBottom: 32,
  },
  appsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 8,
  },
  appsSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  appGrid: {
    gap: 20,
    marginBottom: 24,
  },
  appButton: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  smsApp: {
    backgroundColor: '#3b82f6',
  },
  emailApp: {
    backgroundColor: '#10b981',
  },
  quizApp: {
    backgroundColor: '#f59e0b',
  },
  appEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
  },
  appBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  appBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  tapPrompt: {
    backgroundColor: '#e0f2fe',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  tapPromptText: {
    color: '#0369a1',
    fontSize: 16,
    fontWeight: '600',
  },
});