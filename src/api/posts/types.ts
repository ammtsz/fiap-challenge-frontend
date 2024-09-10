import { PostData } from "@/types"

export type PostResponse = PostData & { user: { username: string } }