"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronLeft, ChevronRight, Tag, Clock, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/content/blog";

const POSTS_PER_PAGE = 6;

interface BlogListWithFilterProps {
  posts: BlogPost[];
}

export default function BlogListWithFilter({ posts }: BlogListWithFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => {
      if (post.frontmatter.category) {
        set.add(post.frontmatter.category);
      }
    });
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  // Category counts map
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach((post) => {
      const cat = post.frontmatter.category;
      if (cat) {
        counts[cat] = (counts[cat] || 0) + 1;
      }
    });
    return counts;
  }, [posts]);

  // Filter posts by search query & category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.frontmatter.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const titleMatch = post.frontmatter.title.toLowerCase().includes(query);
      const excerptMatch = post.frontmatter.excerpt.toLowerCase().includes(query);
      const tagMatch = post.frontmatter.tags.some((tag) => tag.toLowerCase().includes(query));
      const categoryMatch = post.frontmatter.category.toLowerCase().includes(query);

      return titleMatch || excerptMatch || tagMatch || categoryMatch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Helper for truncated pagination with ellipsis (...)
  const paginationRange = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const delta = 1;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) {
      pages.push("ellipsis-left");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("ellipsis-right");
    }

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const blogSection = document.getElementById("blog-controls");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="blog-controls" className="space-y-10">
      {/* Floating Glass Search & Category Filter Header */}
      <div className="space-y-6">
        {/* Floating Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-tertiary)]">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search articles by title, topic, or tech tag..."
            className="w-full pl-11 pr-11 py-3.5 text-sm rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] backdrop-blur-md shadow-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Floating Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--accent)] text-white font-semibold shadow-md shadow-[var(--accent)]/25 scale-[1.03]"
                    : "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg-elevated)]"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                    isSelected
                      ? "bg-white/25 text-white shadow-xs"
                      : "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--accent)]/30"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 text-xs text-[var(--text-secondary)] font-medium">
        <div>
          Showing {filteredPosts.length > 0 ? (currentPage - 1) * POSTS_PER_PAGE + 1 : 0}–
          {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedCategory !== "All" && (
            <span className="font-semibold text-[var(--text-secondary)]"> in &quot;{selectedCategory}&quot;</span>
          )}
          {searchQuery && (
            <span className="font-semibold text-[var(--text-secondary)]"> matching &quot;{searchQuery}&quot;</span>
          )}
        </div>
        {(searchQuery || selectedCategory !== "All") && (
          <button
            onClick={handleClearFilters}
            className="text-[var(--accent)] hover:underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="glass-panel p-10 md:p-14 text-center max-w-xl mx-auto my-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-elevated)] text-[var(--accent)] mb-4">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-h3 text-[var(--text-primary)] mb-2">No Articles Found</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            We couldn&apos;t find any articles matching your search query or selected category filter.
          </p>
          <button
            onClick={handleClearFilters}
            className="cta-button cta-secondary inline-flex items-center gap-2"
          >
            Clear Search & Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {paginatedPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-panel flex flex-col justify-between overflow-hidden p-0 transition-all hover:border-[var(--border-active)] group"
            >
              {post.frontmatter.cover && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/9] w-full overflow-hidden border-b border-[var(--border-subtle)]"
                >
                  <Image
                    src={post.frontmatter.cover}
                    alt={post.frontmatter.coverAlt || post.frontmatter.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              )}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-tertiary)] mb-4">
                    <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)]">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {post.frontmatter.category}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readingTime.text}
                    </span>
                    {post.frontmatter.publishedAt && (
                      <>
                        <span>•</span>
                        <time dateTime={post.frontmatter.publishedAt}>
                          {new Date(post.frontmatter.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </>
                    )}
                  </div>
                  <h2 className="text-h3 text-[var(--text-primary)] mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex min-h-11 items-center hover:text-[var(--accent)] transition-colors"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="text-body-regular text-[var(--text-secondary)] mb-6 line-clamp-3">
                    {post.frontmatter.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-tertiary)]">
                    By {post.frontmatter.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Glassmorphism Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>

          <div className="flex items-center gap-1.5 px-1">
            {paginationRange.map((item, idx) => {
              if (typeof item === "string") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="flex h-9 w-6 items-center justify-center text-xs text-[var(--text-tertiary)] font-bold select-none"
                  >
                    …
                  </span>
                );
              }

              const isCurrent = item === currentPage;
              return (
                <button
                  key={item}
                  onClick={() => handlePageChange(item)}
                  className={`h-9 w-9 text-xs font-semibold rounded-full transition-all ${
                    isCurrent
                      ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/25 scale-[1.05]"
                      : "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-all"
            aria-label="Next page"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
