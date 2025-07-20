import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function EducationalWarning() {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="warning" size={32} color="#fff" />
          </View>
          <Text style={styles.title}>⚠️ YOU'VE BEEN PHISHED!</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>This was a simulated phishing attack</Text>
          </View>
        </View>

        <View style={styles.explanationCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="close-circle" size={20} color="#ef4444" />
            <Text style={styles.cardTitle}>What Just Happened?</Text>
          </View>
          <Text style={styles.explanationText}>
            You just submitted your sensitive banking information to a <Text style={styles.bold}>fake website</Text>. 
            In a real phishing attack, criminals would now have:
          </Text>
          
          <View style={styles.consequencesGrid}>
            <View style={styles.consequenceCard}>
              <Ionicons name="card" size={32} color="#ef4444" />
              <Text style={styles.consequenceTitle}>Your Account Number</Text>
              <Text style={styles.consequenceText}>
                They can use this to target you with more specific attacks
              </Text>
            </View>

            <View style={styles.consequenceCard}>
              <Ionicons name="eye" size={32} color="#ef4444" />
              <Text style={styles.consequenceTitle}>Your Password</Text>
              <Text style={styles.consequenceText}>
                Complete access to your online banking account
              </Text>
            </View>

            <View style={styles.consequenceCard}>
              <Ionicons name="warning" size={32} color="#ef4444" />
              <Text style={styles.consequenceTitle}>Your OTP</Text>
              <Text style={styles.consequenceText}>
                Ability to authorize transactions immediately
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.dataCard}>
          <Text style={styles.dataTitle}>The Data You Submitted (Simulated)</Text>
          <Text style={styles.dataSubtitle}>This data was NOT actually transmitted anywhere</Text>
          <View style={styles.dataDisplay}>
            <Text style={styles.dataItem}>Account: {params.account || '(not entered)'}</Text>
            <Text style={styles.dataItem}>Password: {'*'.repeat((params.password as string)?.length || 0) || '(not entered)'}</Text>
            <Text style={styles.dataItem}>OTP: {params.otp || '(not entered)'}</Text>
          </View>
        </View>

        <View style={styles.consequencesCard}>
          <Text style={styles.consequencesTitle}>Real-World Consequences</Text>
          <View style={styles.consequencesList}>
            <Text style={styles.consequenceItem}>💰 Immediate unauthorized transactions</Text>
            <Text style={styles.consequenceItem}>🏦 Complete compromise of your bank account</Text>
            <Text style={styles.consequenceItem}>📱 Additional attacks using your personal information</Text>
            <Text style={styles.consequenceItem}>🔐 Potential identity theft</Text>
            <Text style={styles.consequenceItem}>💸 Financial losses that may be difficult to recover</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => router.push('/debit')}
        >
          <Text style={styles.continueButtonText}>See What Happens Next →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2f2',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#ef4444',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ef4444',
    textAlign: 'center',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  explanationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    backgroundColor: '#fef2f2',
    padding: 12,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  explanationText: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 24,
    lineHeight: 26,
  },
  bold: {
    fontWeight: 'bold',
  },
  consequencesGrid: {
    gap: 16,
  },
  consequenceCard: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  consequenceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
  consequenceText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  dataSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  dataDisplay: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
  },
  dataItem: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#000',
    marginBottom: 8,
  },
  consequencesCard: {
    backgroundColor: '#fef3c7',
    borderWidth: 1,
    borderColor: '#f59e0b',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  consequencesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 16,
  },
  consequencesList: {
    gap: 8,
  },
  consequenceItem: {
    fontSize: 16,
    color: '#92400e',
  },
  continueButton: {
    backgroundColor: '#ef4444',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});