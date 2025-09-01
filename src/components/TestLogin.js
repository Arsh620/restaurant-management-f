import React, { useState } from 'react';
import { authAPI } from '../services/api';

const TestLogin = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testLogin = async () => {
    setLoading(true);
    try {
      const result = await authAPI.login({
        email: 'arsh@gmail.com',
        password: 'password123'
      });
      setResponse(result.data);
      console.log('Login Response:', result.data);
    } catch (error) {
      console.error('Login Error:', error);
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Test Login API</h3>
      <button
        onClick={testLogin}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Login'}
      </button>
      
      {response && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Response:</h4>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestLogin;