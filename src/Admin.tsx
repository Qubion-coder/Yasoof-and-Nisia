import React, { useState } from 'react';
import { Copy, Link as LinkIcon, MessageSquare } from 'lucide-react';
import { INVITATION } from './App';

export default function Admin() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');

  const generateLink = () => {
    const url = new URL(window.location.origin);
    if (prefix) url.searchParams.set('p', prefix);
    if (guestName) url.searchParams.set('n', guestName);
    return url.toString();
  };

  const generateMessage = () => {
    return `Dear ${prefix} ${guestName} ❤️

With joyful hearts, we warmly invite you and your family to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generateLink()}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ ${INVITATION.couple.groomFull} & ${INVITATION.couple.brideFull}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generateLink());
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateMessage());
      alert('Message copied to clipboard!');
    } catch (err) {
      alert('Failed to copy message.');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] font-montserrat flex items-center justify-center p-6 text-stone-800">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 text-center bg-[#9d6065] text-white">
          <h1 className="text-2xl font-serif font-bold">Invitation Link Generator</h1>
          <p className="opacity-80 text-sm mt-2">Generate personalized links and messages</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#9d6065]">Prefix</label>
              <select
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full p-3 bg-[#faf7f2] border border-[#eedadb] rounded-xl focus:outline-none focus:border-[#bd8186]"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Mr. & Mrs.">Mr. & Mrs.</option>
                <option value="Family">Family</option>
                <option value="Dear">Dear</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#9d6065]">Guest Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full p-3 bg-[#faf7f2] border border-[#eedadb] rounded-xl focus:outline-none focus:border-[#bd8186]"
              />
            </div>
          </div>

          <div className="bg-[#faf7f2] p-4 rounded-xl border border-[#eedadb]/50">
            <h3 className="text-xs font-bold text-[#9d6065] uppercase tracking-widest mb-3">Generated Link Preview</h3>
            <p className="text-sm break-all font-medium text-stone-600">{generateLink()}</p>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#eedadb]">
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 w-full p-3 bg-white border-2 border-[#9d6065] text-[#9d6065] rounded-xl font-bold hover:bg-[#9d6065] hover:text-white transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              Copy Link Only
            </button>
            <button
              onClick={handleCopyMessage}
              className="flex items-center justify-center gap-2 w-full p-3 bg-[#9d6065] text-white rounded-xl font-bold hover:bg-[#7c4146] transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Copy Full Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
