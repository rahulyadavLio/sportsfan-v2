import { useState, useCallback } from "react";
import { chatService, type ChatMessage, type ChatSession } from "@/services/chat.service";

/**
 * useChat — manages AI chat session state.
 *
 * @example
 * const { messages, sendMessage, isLoading } = useChat(sessionId);
 */
export function useChat(initialSessionId?: string) {
  const [session, setSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startSession = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newSession = await chatService.createSession();
      setSession(newSession);
      setMessages(newSession.messages ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start session");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const sessionId = session?.id ?? initialSessionId;
    if (!sessionId) return;

    const optimisticMsg: ChatMessage = {
      id: `temp-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimisticMsg]);
    setIsLoading(true);
    setError(null);

    try {
      const reply = await chatService.sendMessage(sessionId, content);
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== optimisticMsg.id),
        optimisticMsg,
        reply,
      ]);
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id));
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  }, [session, initialSessionId]);

  return { session, messages, isLoading, error, startSession, sendMessage };
}
