interface AuthorAvatarProps {
  authorName?: string;
}

function generateAvatarInitials(authorName: string | undefined) {
  const safeName = authorName ?? "";
  const nameParts = safeName.trim().split(" ");

  //Just a name
  if (nameParts.length === 1) {
    return nameParts[0].slice(0, 2).toUpperCase();
  }
  //More than one name

  const firstInital = nameParts[0][0]?.toUpperCase() || "";
  const lastInitial = nameParts[nameParts.length - 1][0]?.toUpperCase() || "";

  return firstInital + lastInitial;
}

export default function AuthorAvatar({
  authorName = "Author Name",
}: AuthorAvatarProps) {
  const initials = generateAvatarInitials(authorName);
  return (
    <div className="flex items-center">
      <div className="flex  mr-2 p-1 items-center justify-center bg-neutral-800 rounded-md">
        <span className="text-[12px]">{initials}</span>
      </div>
      <div className="text-sm whitespace-nowrap">{authorName}</div>
    </div>
  );
}
