import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface UserAvatarProps {
  /** 사용자 이름 (fallback용) */
  name: string;
  /** 아바타 이미지 URL */
  image?: string;
  /** 온라인 여부 */
  online?: boolean;
}

export function UserAvatar({ name, image, online }: UserAvatarProps) {
  // 이름에서 첫 글자 2개 추출 (영문 이름 가정)
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      {online !== undefined && (
        <Badge
          variant={online ? "default" : "secondary"}
          className="absolute -bottom-1 -right-1 size-3 rounded-full p-0"
          title={online ? "온라인" : "오프라인"}
        />
      )}
    </div>
  );
}
