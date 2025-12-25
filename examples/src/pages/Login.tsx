import React from 'react';
import { LoginPanel } from 'miaoda-auth-react';
import { api } from '../db/supabase';

const login_config = {
  title: '瑜悦瑜伽登录',
  desc: '身心平衡，自然之美',
  onLoginSuccess: async (user: any) => {
    console.log("user:", user);

    try {
      const existingUser = await api.getUserById(user.id);

      if (!existingUser) {
        const usersCount = await api.getUsersCount();
        const isFirstUser = usersCount === 0;

        await api.createUser({
          id: user.id,
          phone: user.phone,
          nickname: '瑜伽爱好者',
          role: isFirstUser ? 'admin' : 'user'
        });
      }
    } catch (error) {
      console.error('用户初始化失败:', error);
    }
  },
  privacyPolicyUrl: import.meta.env.VITE_PRIVACY_POLICY_URL,
  userPolicyUrl: import.meta.env.VITE_USER_POLICY_URL,
  showPolicy: import.meta.env.VITE_SHOW_POLICY,
  policyPrefix: import.meta.env.VITE_POLICY_PREFIX
};

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      <LoginPanel {...login_config} />
    </div>
  );
}