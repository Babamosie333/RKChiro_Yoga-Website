import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';
import type { Booking } from '../../types/types';

interface EvaluationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking;
  onSuccess: () => void;
}

const EvaluationDialog: React.FC<EvaluationDialogProps> = ({
  open,
  onOpenChange,
  booking,
  onSuccess
}) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const { evaluate, loading } = useBooking();

  const handleSubmit = async () => {
    const success = await evaluate(booking.id, rating, comment);
    if (success) {
      onSuccess();
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setRating(5);
    setComment('');
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>评价课程</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">{booking.course?.title}</h4>
            <p className="text-sm text-gray-600">
              教练：{booking.course?.instructor?.name}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">课程评分</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1"
                >
                  <Star
                    size={24}
                    className={`${
                      star <= rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">评价内容（可选）</label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="分享您的上课体验..."
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            取消
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600"
          >
            {loading ? '提交中...' : '提交评价'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluationDialog;