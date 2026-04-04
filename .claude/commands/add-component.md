---
description: shadcn/ui 기반 TypeScript 컴포넌트 자동 생성
---

컴포넌트명: $ARGUMENTS

다음 작업을 수행해주세요:

1. **폴더 구조 생성**
   - app/components/{컴포넌트명}/ 디렉토리 생성
   - 다음 파일들을 생성:
     - index.tsx: 메인 컴포넌트 파일
     - types.ts: TypeScript 인터페이스/타입 정의

2. **index.tsx 작성 (shadcn/ui 활용)**
   - React FC 타입으로 컴포넌트 정의
   - props는 types.ts에서 import한 인터페이스 사용
   - Tailwind CSS 클래스명 포함
   - cn() 유틸 사용하여 클래스 병합 (shadcn/ui 패턴)
   - 간단하고 재사용 가능한 구조

3. **types.ts 작성**
   - 컴포넌트 Props 인터페이스 정의
   - 타입 안전성 확보 (any 타입 금지)
   - JSDoc 주석으로 각 속성 설명

4. **index.ts 생성** (선택사항)
   - 컴포넌트와 타입을 export하는 배럴 파일

스타일 가이드:
- 들여쓰기: 2칸
- 네이밍: PascalCase (컴포넌트), camelCase (변수/함수)
- CSS: Tailwind CSS만 사용
- 반응형 디자인 포함
- 코드 주석: 한국어
