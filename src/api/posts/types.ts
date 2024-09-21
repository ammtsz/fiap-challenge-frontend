import { PostData } from "@/types"

export type PostResponse = PostData & { user: { username: string } }
export type PostPost = PostData & { userId: string }
