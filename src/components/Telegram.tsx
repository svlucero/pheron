"use client";

import { MessageCircle, Sparkles } from "lucide-react";

const models = [
  {
    name: "Claude",
    color: "bg-[#6d28d9]/10 text-[#6d28d9] border-[#6d28d9]/20",
    dot: "bg-[#6d28d9]",
  },
  {
    name: "Gemini",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    name: "Codex",
    color: "bg-green-50 text-green-700 border-green-200",
    dot: "bg-green-500",
  },
];

const chatMessages = [
  { from: "user", text: "Review PR #88 and tell me if it's ready to merge" },
  {
    from: "bot",
    text: "Checked PR #88. It has 2 unresolved comments and is missing test coverage in the auth module. I'd hold off on merging for now.",
    model: "Claude",
  },
  { from: "user", text: "Assign issue #102 to Gemini" },
  {
    from: "bot",
    text: "Done ✓ Issue #102 assigned to Gemini. It will start shortly.",
    model: "Claude",
  },
];

export default function Telegram() {
  return (
    <section className="py-24 bg-[#f3f0ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6d28d9]/10 text-[#6d28d9] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6d28d9] inline-block" />
              New · Telegram Integration
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 text-balance mb-6">
              Chat with Claude, Gemini or Codex{" "}
              <span className="text-[#6d28d9]">from your phone</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Connect your Telegram bot to AgentCenter and manage your agents
              from anywhere. Review PRs, assign issues, and check token spend
              — all from chat.
            </p>

            {/* Model chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {models.map((m) => (
                <span
                  key={m.name}
                  className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border ${m.color}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
                  {m.name}
                </span>
              ))}
            </div>

            {/* Feature list */}
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Assign issues to your agents with a single message",
                "Get real-time notifications for PRs and deploys",
                "Query repository status instantly",
                "Choose which model to use for each task",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#6d28d9] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-white h-6 flex items-center justify-between px-5">
                  <span className="text-[10px] font-semibold text-gray-800">9:41</span>
                  <div className="flex gap-1 items-center">
                    <span className="text-[10px] text-gray-600">●●●</span>
                  </div>
                </div>

                {/* Chat header */}
                <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6d28d9] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Pheron Bot</p>
                    <p className="text-[10px] text-green-500 font-medium">online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="bg-[#efecfc] px-3 py-4 space-y-3 min-h-[320px]">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                          msg.from === "user"
                            ? "bg-[#6d28d9] text-white rounded-br-sm"
                            : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                        }`}
                      >
                        {msg.from === "bot" && msg.model && (
                          <p className="text-[9px] font-semibold text-[#6d28d9] mb-1 uppercase tracking-wide">
                            {msg.model}
                          </p>
                        )}
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-gray-100">
                  <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-[10px] text-gray-400">
                    Type a command...
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#6d28d9] flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-10 top-16 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-green-500 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-800">PR #88 reviewed</p>
                  <p className="text-[9px] text-gray-400">by Claude · just now</p>
                </div>
              </div>

              {/* Floating model badge */}
              <div className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
                <p className="text-[9px] text-gray-400 mb-1">Active model</p>
                <div className="flex gap-1">
                  {models.map((m) => (
                    <span
                      key={m.name}
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${m.color}`}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
