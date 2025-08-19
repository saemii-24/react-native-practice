import { createUser } from "@/lib/appwrite";

// 테스트용 사용자 생성 함수
export const createTestUser = async () => {
  try {
    const testUser = await createUser(
      "test@example.com",
      "password123",
      "Test User"
    );
    console.log("✅ 테스트 사용자 생성 완료:", testUser);
    return testUser;
  } catch (error: any) {
    console.log("❌ 테스트 사용자 생성 실패:", error.message);
    // 이미 존재하는 사용자일 경우 로그인 시도
    if (error.message.includes("already exists")) {
      console.log("🔄 기존 사용자로 로그인을 시도하세요");
    }
  }
};
