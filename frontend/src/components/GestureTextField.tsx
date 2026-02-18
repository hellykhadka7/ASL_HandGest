import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Type, Trash2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface GestureTextFieldProps {
  currentGesture: string | null;
  isCapturing: boolean;
}

export const GestureTextField = ({ currentGesture, isCapturing }: GestureTextFieldProps) => {
  const [text, setText] = useState('');
  const [lastAddedGesture, setLastAddedGesture] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Add gesture to text when a new valid gesture is detected
  useEffect(() => {
    if (!isCapturing || !currentGesture || currentGesture === 'None') return;
    
    // Only add if it's different from the last added gesture (avoid rapid duplicates)
    if (currentGesture !== lastAddedGesture) {
      setText(prev => prev + currentGesture);
      setLastAddedGesture(currentGesture);
    }
  }, [currentGesture, isCapturing, lastAddedGesture]);

  // Reset lastAddedGesture when gesture changes to None (hand removed)
  useEffect(() => {
    if (currentGesture === 'None' || !currentGesture) {
      setLastAddedGesture(null);
    }
  }, [currentGesture]);

  const handleClear = useCallback(() => {
    setText('');
    setLastAddedGesture(null);
  }, []);

  const handleCopy = useCallback(async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Text copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy text');
    }
  }, [text]);

  const handleBackspace = useCallback(() => {
    setText(prev => prev.slice(0, -1));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Detected Text</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackspace}
            disabled={!text}
            className="h-8 px-2"
          >
            ⌫
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            disabled={!text}
            className="h-8 px-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            disabled={!text}
            className="h-8 px-2"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative min-h-[60px] p-4 rounded-lg bg-secondary/50 border border-border">
        {text ? (
          <p className="text-2xl font-mono tracking-wider break-all">
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
            />
          </p>
        ) : (
          <p className="text-muted-foreground text-center">
            {isCapturing 
              ? 'Show hand gestures to type...' 
              : 'Start capturing to begin typing'}
          </p>
        )}
      </div>

      {text && (
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {text.length} character{text.length !== 1 ? 's' : ''}
        </p>
      )}
    </motion.div>
  );
};
