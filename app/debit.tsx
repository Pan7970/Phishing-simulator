import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function DebitSimulation() {
  const [showMessage, setShowMessage] = useState(false);
  const [showPanic, setShowPanic] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    const timer2 = setTimeout(() => setShowPanic(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Phone Frame */}
        <View style={styles.phoneFrame}>
          <View style={styles.phoneScreen}>
            {/* Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.time}>9:47</Text>
              <View style={styles.statusIcons}>
                <Ionicons name="wifi" size={12} color="#000" />
                <Text style={styles.signal}>●●●</Text>
                <Ionicons name="battery-full" size={12} color="#000" />
                <Text style={styles.battery}>95%</Text>
              </View>
            </View>

            {/* SMS Notification */}
            {showMessage && (
              <View style={styles.smsNotification}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.bankName}>Punjab & Sind Bank</Text>
                  <Text style={styles.timestamp}>now</Text>
                </View>
                <Text style={styles.smsText}>
                  Dear Customer, Rs.24,000 has been debited from your account ending with 1234. 
                  If not done by you, please contact customer care immediately.
                </Text>
              </View>
            )}

            {showPanic && (
              <View style={styles.panicContent}>
                <View style={styles.panicCard}>
                  <View style={styles.panicHeader}>
                    <Ionicons name="warning" size={32} color="#ef4444" />
                    <Text style={styles.panicTitle}>😱 The Panic Sets In</Text>
                  </View>
                  <Text style={styles.panicText}>
                    This is the moment victims realize they've been scammed. 
                    ₹24,000 is gone, and it's often very difficult to recover.
                  </Text>
                </View>

                <View style={styles.responseCard}>
                  <Text style={styles.responseTitle}>Typical Victim Response:</Text>
                  <View style={styles.responseList}>
                    <View style={styles.responseItem}>
                      <View style={[styles.dot, { backgroundColor: '#ef4444' }]} />
                      <Text style={styles.responseText}>Immediately calls the bank</Text>
                    </View>
                    <View style={styles.responseItem}>
                      <View style={[styles.dot, { backgroundColor: '#f97316' }]} />
                      <Text style={styles.responseText}>Reports to cyber crime</Text>
                    </View>
                    <View style={styles.responseItem}>
                      <View style={[styles.dot, { backgroundColor: '#eab308' }]} />
                      <Text style={styles.responseText}>Blocks all cards and accounts</Text>
                    </View>
                    <View style={styles.responseItem}>
                      <View style={[styles.dot, { backgroundColor: '#6b7280' }]} />
                      <Text style={styles.responseText}>Money recovery: Often unsuccessful</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

            {/* Educational Overlay */}
            <View style={styles.educationalOverlay}>
              <View style={styles.simulationBadge}>
                <Text style={styles.simulationText}>🎓 SIMULATION</Text>
              </View>
              <Text style={styles.overlayDescription}>
                This represents the devastating moment when victims realize they've lost money to a scam.
              </Text>
              
              <TouchableOpacity 
                style={[styles.continueButton, !showPanic && styles.disabledButton]}
                onPress={() => router.push('/tips')}
                disabled={!showPanic}
              >
                <Text style={styles.continueButtonText}>
                  {showPanic ? 'Learn How to Protect Yourself' : 'Loading...'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  phoneFrame: {
    backgroundColor: '#000',
    borderRadius: 32,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneScreen: {
    backgroundColor: '#fff',
    borderRadius: 24,
    height: 600,
    width: 300,
    overflow: 'hidden',
    position: 'relative',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
  },
  time: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signal: {
    fontSize: 10,
    color: '#000',
  },
  battery: {
    fontSize: 10,
    color: '#000',
  },
  smsNotification: {
    backgroundColor: '#f3f4f6',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bankName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#6b7280',
  },
  smsText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  panicContent: {
    padding: 16,
    gap: 16,
  },
  panicCard: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  panicHeader: {
    alignItems: 'center',
    marginBottom: 8,
  },
  panicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ef4444',
    marginTop: 8,
  },
  panicText: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 20,
  },
  responseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  responseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  responseList: {
    gap: 8,
  },
  responseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  responseText: {
    fontSize: 12,
    color: '#374151',
  },
  educationalOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  simulationBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  simulationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  overlayDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  continueButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 12,
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});