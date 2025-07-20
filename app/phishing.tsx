import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function PhishingPage() {
  const [formData, setFormData] = useState({
    account: '',
    debitCard: '',
    cvv: '',
    otp: '',
    mobile: '',
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    router.push({
      pathname: '/warning',
      params: formData
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Educational Warning Banner */}
        <View style={styles.warningBanner}>
          <View style={styles.educationalBadge}>
            <Text style={styles.badgeText}>🎓 EDUCATIONAL SIMULATION</Text>
          </View>
          <Text style={styles.warningText}>This is a FAKE banking page for learning purposes only</Text>
        </View>

        {/* Bank Header */}
        <View style={styles.bankHeader}>
          <View style={styles.bankInfo}>
            <View style={styles.bankLogo}>
              <Ionicons name="shield-checkmark" size={32} color="#10b981" />
            </View>
            <View>
              <Text style={styles.bankName}>Punjab and Sind Bank</Text>
              <Text style={styles.bankSubtitle}>Personal Net Banking</Text>
            </View>
          </View>
          <View style={styles.secureIndicator}>
            <Ionicons name="lock-closed" size={16} color="#fff" />
            <Text style={styles.secureText}>secure.psb.bank.in</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Account Verification Required</Text>
              <Text style={styles.formSubtitle}>
                Please verify your details to secure your Punjab & Sind Bank account
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Account Number</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="person" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Account Number"
                    value={formData.account}
                    onChangeText={(text) => setFormData({ ...formData, account: text })}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Debit Card Number</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter 16-digit Card Number"
                    value={formData.debitCard}
                    onChangeText={(text) => setFormData({ ...formData, debitCard: text })}
                  />
                </View>
              </View>

              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>CVV</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="CVV"
                      value={formData.cvv}
                      onChangeText={(text) => setFormData({ ...formData, cvv: text })}
                    />
                  </View>
                </View>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>OTP</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChangeText={(text) => setFormData({ ...formData, otp: text })}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Mobile Number</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="person" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChangeText={(text) => setFormData({ ...formData, mobile: text })}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Net Banking Username</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="person" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    value={formData.username}
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Net Banking Password</Text>
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed" size={20} color="#9ca3af" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry={!showPassword}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons 
                      name={showPassword ? "eye-off" : "eye"} 
                      size={20} 
                      color="#9ca3af" 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Verify Account</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.customerCare}>
              <Text style={styles.customerCareText}>
                Customer Care: <Text style={styles.phoneNumber}>1800-11-2345</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Educational Notice */}
        <View style={styles.educationalNotice}>
          <View style={styles.noticeCard}>
            <View style={styles.noticeBadge}>
              <Text style={styles.noticeBadgeText}>Educational Notice</Text>
            </View>
            <Text style={styles.noticeText}>
              This is a FAKE Punjab and Sind Bank page. Real banks never ask for credentials via email/SMS links.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  scrollContent: {
    flexGrow: 1,
  },
  warningBanner: {
    backgroundColor: '#ef4444',
    padding: 8,
    alignItems: 'center',
  },
  educationalBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  warningText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  bankHeader: {
    backgroundColor: '#10b981',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bankLogo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  bankName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bankSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  secureIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  secureText: {
    color: '#fff',
    fontSize: 12,
  },
  mainContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  formSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  eyeButton: {
    padding: 4,
  },
  submitButton: {
    backgroundColor: '#10b981',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  customerCare: {
    alignItems: 'center',
    marginTop: 24,
  },
  customerCareText: {
    fontSize: 14,
    color: '#6b7280',
  },
  phoneNumber: {
    fontWeight: '600',
    color: '#10b981',
  },
  educationalNotice: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  noticeCard: {
    backgroundColor: '#fef3c7',
    borderWidth: 1,
    borderColor: '#f59e0b',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  noticeBadge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#f59e0b',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginBottom: 4,
  },
  noticeBadgeText: {
    color: '#92400e',
    fontSize: 10,
    fontWeight: '600',
  },
  noticeText: {
    color: '#92400e',
    fontSize: 12,
    textAlign: 'center',
  },
});