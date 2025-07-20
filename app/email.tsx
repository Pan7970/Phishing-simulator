import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function EmailSimulation() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Email Client Interface */}
        <View style={styles.emailClient}>
          {/* Email Header */}
          <View style={styles.emailHeader}>
            <View style={styles.headerLeft}>
              <Ionicons name="mail" size={24} color="#3b82f6" />
              <Text style={styles.headerTitle}>Gmail</Text>
            </View>
            <Text style={styles.inboxCount}>Inbox (1)</Text>
          </View>

          {/* Email Content */}
          <View style={styles.emailContent}>
            <View style={styles.emailCard}>
              {/* Email Info */}
              <View style={styles.emailInfo}>
                <View style={styles.emailSubject}>
                  <Text style={styles.subjectText}>🚨 Urgent: Account Verification Required</Text>
                  <View style={styles.suspiciousBadge}>
                    <Text style={styles.suspiciousText}>SUSPICIOUS</Text>
                  </View>
                </View>
                <Text style={styles.senderEmail}>noreply@punjabandsindbank.in</Text>
                <View style={styles.emailMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="calendar" size={12} color="#6b7280" />
                    <Text style={styles.metaText}>Today</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="time" size={12} color="#6b7280" />
                    <Text style={styles.metaText}>3:42 PM</Text>
                  </View>
                </View>
              </View>

              {/* Email Body */}
              <View style={styles.emailBody}>
                <Text style={styles.emailTitle}>🚨 Urgent: Account Verification Required</Text>
                
                <Text style={styles.emailText}>Dear Valued Customer,</Text>
                
                <Text style={styles.emailText}>
                  We have detected unauthorized login attempts on your Punjab & Sind Bank account.
                  To prevent further misuse, please verify your identity within 12 hours by clicking the button below:
                </Text>

                <Text style={[styles.emailText, styles.urgentText]}>
                  Failure to verify may result in account suspension.
                </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.verifyButton}
                    onPress={() => alert('This would redirect to a fake PSB page!')}
                  >
                    <Text style={styles.verifyButtonText}>👉 Verify Now</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.signature}>
                  <Text style={styles.signatureText}>Sincerely,</Text>
                  <Text style={styles.signatureText}>Punjab & Sind Bank Security Team</Text>
                  <Text style={styles.signatureText}>www.punjabandsindbank.co.in</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Educational Analysis */}
        <View style={styles.analysisCard}>
          <View style={styles.analysisHeader}>
            <View style={styles.analysisTitle}>
              <Ionicons name="warning" size={20} color="#f59e0b" />
              <Text style={styles.analysisTitleText}>🎓 Educational Analysis</Text>
            </View>
            <View style={styles.simulationBadge}>
              <Text style={styles.simulationText}>SIMULATION</Text>
            </View>
          </View>

          {!showAnalysis ? (
            <TouchableOpacity 
              style={styles.analyzeButton}
              onPress={() => setShowAnalysis(true)}
            >
              <Text style={styles.analyzeButtonText}>Analyze This Phishing Email</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.analysisContent}>
              <View style={styles.analysisGrid}>
                <View style={styles.redFlags}>
                  <Text style={styles.sectionTitle}>🚩 Red Flags Found:</Text>
                  <View style={styles.flagsList}>
                    <Text style={styles.flagItem}>• <Text style={styles.bold}>Fake domain:</Text> punjabandsindbank.in (suspicious)</Text>
                    <Text style={styles.flagItem}>• <Text style={styles.bold}>Urgency tactics:</Text> "URGENT", "immediate verification"</Text>
                    <Text style={styles.flagItem}>• <Text style={styles.bold}>Generic greeting:</Text> "Dear Valued Customer"</Text>
                    <Text style={styles.flagItem}>• <Text style={styles.bold}>Suspicious button:</Text> Asking to click to "verify"</Text>
                  </View>
                </View>
                
                <View style={styles.verification}>
                  <Text style={styles.sectionTitle}>✅ How to Verify:</Text>
                  <View style={styles.flagsList}>
                    <Text style={styles.flagItem}>• Check official PSB domain (psbindia.com)</Text>
                    <Text style={styles.flagItem}>• Call PSB customer service: 1800-11-2345</Text>
                    <Text style={styles.flagItem}>• Login through official app/website</Text>
                    <Text style={styles.flagItem}>• Never click links in suspicious emails</Text>
                  </View>
                </View>
              </View>
              
              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => router.push('/phishing')}
              >
                <Text style={styles.continueButtonText}>Continue to Bank Page Simulation →</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  scrollContent: {
    padding: 16,
  },
  emailClient: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
    marginBottom: 24,
  },
  emailHeader: {
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  inboxCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  emailContent: {
    padding: 24,
  },
  emailCard: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  emailInfo: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  emailSubject: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  suspiciousBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  suspiciousText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  senderEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  emailMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  emailBody: {
    padding: 24,
  },
  emailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 16,
  },
  emailText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 16,
    lineHeight: 24,
  },
  urgentText: {
    fontWeight: '600',
    color: '#dc2626',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  verifyButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signature: {
    marginTop: 16,
  },
  signatureText: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  analysisCard: {
    backgroundColor: '#fef3c7',
    borderWidth: 1,
    borderColor: '#f59e0b',
    borderRadius: 12,
    padding: 24,
  },
  analysisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  analysisTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analysisTitleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  simulationBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  simulationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  analyzeButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 16,
  },
  analyzeButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
  },
  analysisContent: {
    gap: 16,
  },
  analysisGrid: {
    gap: 16,
  },
  redFlags: {
    marginBottom: 16,
  },
  verification: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  flagsList: {
    gap: 8,
  },
  flagItem: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 16,
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});