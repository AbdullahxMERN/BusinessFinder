'use client';

import { useState } from 'react';
import { X, Webhook, Check, AlertCircle, Play } from 'lucide-react';

export default function WebhookModal({ webhookUrl, setWebhookUrl, onClose, onTestWebhook }) {
  const [tempUrl, setTempUrl] = useState(webhookUrl || '');
  const [savedStatus, setSavedStatus] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setWebhookUrl(tempUrl.trim());
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 1200);
  };

  const handleTest = async () => {
    if (!tempUrl) return;
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch(tempUrl.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          test: true,
          query: 'test business search',
          timestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setTestResult({ success: true, message: 'Successfully connected to n8n webhook!' });
      } else {
        setTestResult({ success: false, message: `Webhook responded with status ${res.status}` });
      }
    } catch (err) {
      setTestResult({ success: false, message: 'Could not reach webhook endpoint (CORS or network error). Local fallback engine will be used automatically.' });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Webhook className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">n8n Webhook Configuration</h3>
            <p className="text-xs text-slate-500">Connect your custom n8n workflow endpoint</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="webhook-url-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              n8n Webhook URL
            </label>
            <input
              id="webhook-url-input"
              type="url"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="https://your-n8n-instance.com/webhook/search-businesses"
              className="w-full text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-900 font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Search queries will POST <code className="text-slate-800 font-semibold">{'{ query, category, location }'}</code> to this endpoint. If empty, local business search engine will run.
            </p>
          </div>

          {testResult && (
            <div className={`p-3 rounded-xl border text-xs font-medium ${
              testResult.success ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}>
              <div className="flex items-center gap-2">
                {testResult.success ? <Check className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
                <span>{testResult.message}</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleTest}
              disabled={!tempUrl || testing}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{testing ? 'Testing...' : 'Test Webhook'}</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow transition-colors"
            >
              {savedStatus ? <Check className="w-4 h-4 text-emerald-400" /> : null}
              <span>{savedStatus ? 'Saved!' : 'Save Endpoint'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
